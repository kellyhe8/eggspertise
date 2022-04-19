// import LetterInput from "./LetterInput";
import React, { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';
import HintFeature from './HintFeature';

// import * as tf from '@tensorflow/tfjs';
import Webcam from "react-webcam";
import { Camera, CameraOptions } from '@mediapipe/camera_utils'
import {
  Hands,
  HAND_CONNECTIONS
} from '@mediapipe/hands'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'


import axios from 'axios';

export default function CenterPracticeCol(props) {

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [answer, setAnswer] = useState(alphabet[Math.floor(Math.random() * alphabet.length)]);
  const [guess, setGuess] = useState("");
  const [won, setWon] = useState(false);
  const [points, setPoints] = useState(0);

  const [sendFrame, setSendFrame] = useState(false);
  const [jointData, setJointData] = useState([]);

  const reset = () => {
    setGuess("");
    setWon(false);
    setAnswer(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

  const checkGuess = (guess) => {
    setPoints(answer.toUpperCase() === guess.toUpperCase() ? points + 1 : points);
    setWon(answer.toUpperCase() === guess.toUpperCase() || won ? true : false);
    setGuess(guess);
    return answer.toUpperCase() === guess.toUpperCase();
  }

  const toggleSendFrame = () => {
    const data = {};
    for (let i = 0; i < jointData.length; i++) {
      data[i] = jointData[i];
    }
    request(data);
    setSendFrame(!sendFrame);
  }
  // https://stackoverflow.com/questions/67674453/how-to-run-mediapipe-facemesh-on-a-es6-node-js-environment-alike-react

  

  let request = (jointData) => {
    var myDataObj = {"img":jointData};
    var formData = new FormData();

    for (var key in myDataObj) {
      formData.append(key, myDataObj[key])
    } 
    // axios.post('http://127.0.0.1:5000', formData, {headers:{ 'Content-Type': 'multipart/form-data' }})
    axios.post('http://127.0.0.1:5000', jointData, {headers:{ 'Content-Type': 'application/json' }})

        .then((res) => {
            checkGuess(res.data.data)
            // console.log(res.data)
        }).catch((error) => {
            console.log("ERROR", error)
        });
  }

  const [cameraReady, setCameraReady] = useState(false);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let canvasCtx
  let camera

  const videoConstraints = {
    width: 600,
    height: 400,
    facingMode: { exact: "user" }
  };

  // const videoElement = document.getElementsByClassName('input_video')[0];
  // const canvasElement = document.getElementsByClassName('output_canvas')[0];

  const canvasElement = document.createElement('canvas');

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

    canvasCtx = canvasRef.current.getContext('2d');
    hands.onResults(onResults);
    
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          if (webcamRef.current) 
            await hands.send({ image: webcamRef.current.video });
        },
        width: 600,
        height: 400,
      });
      camera.start();

        }
      }, [sendFrame]);

  function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
        results.image, 0, 0, canvasElement.width, canvasElement.height);

    if (results.multiHandLandmarks) {
      for (const landmarks of results.multiHandLandmarks) {
        setJointData(landmarks);
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                       {color: '#00FF00', lineWidth: 1});
        drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 1, radius:1});
      }
    }

    canvasCtx.restore();
  }

  return (
    <div className="row center-col">
      {/* <h3 >Sign Study Mode:</h3> */}
      {/* <p>Instructions: Sign the following letter and lock in!</p> */}
      <p className="line-height-dense">Instructions: Sign the following letter and lock in!</p>
      
      <div className="pink-background row flex-row-center">
      <h3>Sign {answer}</h3>
      <h3 className="line-height-dense feedback">{guess ? `You just signed ${guess}. It was ${won ? `correct` : `wrong`}.` : ""}</h3>
        <div className="video-box">
        <Webcam
          audio={false}
          width={600}
          ref={webcamRef}
          screenshotFormat="image/jpg"
          height={400}
          onUserMedia={() => {
            setCameraReady(true)
          }}
          videoConstraints={videoConstraints}
          style={{display: "none"}}
        />
        <canvas ref={canvasRef} style={{width: 600,height: 400}}/>

          <Button onClick={toggleSendFrame} variant="contained"> Send Img </Button>  
          <p className="line-height-dense">Score: {points}</p>
        </div>
        <div className="control-buttons">
          <Button disabled={!won} onClick={reset} variant="contained">next</Button>
          <Button disabled={won} onClick={reset} variant="contained">skip</Button>
        </div>
      </div>
      <HintFeature toggled={props.toggled} toggleHint={props.toggleHint} answer={answer}/>
    </div>
  );
}