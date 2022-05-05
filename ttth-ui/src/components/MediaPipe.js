import React, { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';
// import LoadingButton from '@mui/lab/LoadingButton';

import Webcam from "react-webcam";
import { Camera } from '@mediapipe/camera_utils'
import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'

import axios from 'axios';

export default function MediaPipe(props) {

  const [sendFrame, setSendFrame] = useState(false);
  const [jointData, setJointData] = useState([]);

  // const [errorMsg, setErrorMsg] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let camera = null;

  const toggleSendFrame = () => {
    const data = {};
    if (jointData.length > 0 && !props.isWon) {
      jointData.forEach((val, i) => data[i] = val)
      request(data)
    }
    setSendFrame(!sendFrame); // Makes the useEffect reset so the hook states updates the newest jointData
  }
  // https://stackoverflow.com/questions/67674453/how-to-run-mediapipe-facemesh-on-a-es6-node-js-environment-alike-react

  let request = async (jointData) => {
    // axios.post('http://127.0.0.1:5000', formData, {headers:{ 'Content-Type': 'multipart/form-data' }})
    // console.log("poo",jointData)
    jointData["answer"] = props.answer
    // console.log("Send request");
    axios.post('http://localhost:3001', jointData, {headers:{ 'Content-Type': 'application/json' }})
      .then((res) => {
        props.onCheckGuess({guess: res.data.data, feedback: res.data.feedback})
        
        // setErrorMsg("");
      }).catch((error) => {
        // console.log(error);
        // setErrorMsg(error);
        
      });
  }

  useEffect(() => {
    // console.log("redoting useFEfect", isLoading);
    // console.log(isLoading)
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
      // setTimeout(toggleSendFrame, 5000);
    }
  }, []);

  useEffect(() => {
    if (!props.isWon) {
      setTimeout(toggleSendFrame, 5000);
    }
  }, [sendFrame, props.isWon]);

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
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {color: '#6A8D73', lineWidth: 3});
        drawLandmarks(canvasCtx, landmarks, {color: '#823038', lineWidth: 3, radius:3});
      }
    } else {
      setJointData([]);
    }
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
      {/* <p>{errorMsg}</p> */}
      <Button 
        // loading={isLoading}
        // loadingPosition="center"
        disabled={props.isWon} 
        onClick={() => {
          toggleSendFrame();
        }} variant="contained" color="secondary"> Submit</Button>  
    </>      
  );
}