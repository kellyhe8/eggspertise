import React, { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';

import Webcam from "react-webcam";
import { Camera } from '@mediapipe/camera_utils'
import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'

import axios from 'axios';

export default function MediaPipe(props) {

  const [sendFrame, setSendFrame] = useState(false);
  const [jointData, setJointData] = useState([]);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let camera = null;

  const toggleSendFrame = () => {
    const data = {};
    jointData.forEach((val, i) => data[i] = val)

    request(data);
    setSendFrame(!sendFrame);
  }
  // https://stackoverflow.com/questions/67674453/how-to-run-mediapipe-facemesh-on-a-es6-node-js-environment-alike-react

  let request = (jointData) => {
    var myDataObj = {"img": jointData};
    var formData = new FormData();

    for (var key in myDataObj) {
      formData.append(key, myDataObj[key])
    } 
    // axios.post('http://127.0.0.1:5000', formData, {headers:{ 'Content-Type': 'multipart/form-data' }})
    axios.post('http://127.0.0.1:5000', jointData, {headers:{ 'Content-Type': 'application/json' }})
      .then((res) => {
          props.onCheckGuess(res.data.data)
          // console.log(res.data)
      }).catch((error) => {
          // console.log(error)
      });
  }

  useEffect(() => {
    const hands = new Hands({locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }});
    hands.setOptions({
      selfieMode: true,
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    hands.onResults(onResults);
    
    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null) {
      camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          await hands.send({ image: webcamRef.current.video });
        },
        width: 600,
        height: 400,
      });
      camera.start();

    }
  }, [sendFrame]);

  function onResults(results) {
    canvasRef.current.width = webcamRef.current.video.videoWidth;
    canvasRef.current.height = webcamRef.current.video.videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasRef.current.getContext('2d')
    
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

    if (results.multiHandLandmarks) {
      for (const landmarks of results.multiHandLandmarks) {
        setJointData(landmarks);
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {color: '#6A8D73', lineWidth: 2});
        drawLandmarks(canvasCtx, landmarks, {color: '#823038', lineWidth: 2, radius:2});
      }
    }
    // canvasCtx.restore();
  }

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpg"
        width={600}
        height={400}
        hidden={true}
        // videoConstraints={videoConstraints}
        style={{display: "none"}}
      />
      <canvas ref={canvasRef} style={{width: 600, height: 400}}/>
      {/* <video ref={videoRef} onCanPlay={() => getImage()} />   */}
      <Button disabled={props.isWon} onClick={toggleSendFrame} variant="contained"> Send Img </Button>  
    </>      
  );
}