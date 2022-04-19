// import LetterInput from "./LetterInput";
import React, { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';

import Webcam from "react-webcam";
import { Camera, CameraOptions } from '@mediapipe/camera_utils'
import {
  Hands,
  HAND_CONNECTIONS
} from '@mediapipe/hands'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'

// import * as tf from '@tensorflow/tfjs';

import axios from 'axios';

export default function CenterPracticeCol() {

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [answer, setAnswer] = useState(alphabet[Math.floor(Math.random() * 26)]);
  const [guess, setGuess] = useState("");
  const [won, setWon] = useState(false);
  const [points, setPoints] = useState(0);
  const [sendFrame, setSendFrame] = useState(false);
  const [jointData, setJointData] = useState([]);

  const reset = () => {
    setGuess("");
    setWon(false);
    setAnswer(alphabet[Math.floor(Math.random() * 26)]);
  }

  const checkGuess = (guess) => {
    // console.log("CHECKING GUESS", guess)
    setPoints(answer === guess ? points + 1 : points);
    setWon(answer === guess || won ? true : false);
    setGuess(guess);
    return answer === guess;
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
    // e.preventDefault()
    // const body  = {
    //     "img": data
    // };

    var myDataObj = {"img":jointData};
    var formData = new FormData();

    for (var key in myDataObj) {
      formData.append(key, myDataObj[key])
    } 
    // axios.post('http://127.0.0.1:5000', formData, {headers:{ 'Content-Type': 'multipart/form-data' }})
    axios.post('http://127.0.0.1:5000', jointData, {headers:{ 'Content-Type': 'application/json' }})

        .then((res) => {
            checkGuess(res.data.data)
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
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

//   const videoElement = document.getElementsByClassName('input_video')[0];
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
          await hands.send({ image: webcamRef.current.video });
        },
        width: 520,
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



//   let handleClick = () => {
//     let video = videoRef.current;
//     let photo = photoRef.current;
//     let ctx = photo.getContext("2d");

//     const width = 200;
//     const height = 200;

//     ctx.drawImage(video, 0, 0, width, height);
//     // var data = photo.toDataURL('image/jpeg');
//     var data = ctx.getImageData(0,0,width, height);
//     var x = Array.from(data.data);
//     request(Array.from(data.data));
//   }

//   const getImage = () => {
//     let video = videoRef.current;
//     let photo = photoRef.current;
//     let ctx = photo.getContext("2d");

//     const width = 3;
//     const height = 3;

    // return setInterval(() => {
    //   // ctx.drawImage(video, 0, 0, width, height);
    //   // var data = photo.toDataURL('image/jpeg');
    //   // var data = ctx.getImageData(0,0,width, height);
    //   // console.log(data.data)
    //   // request(data);
    //   // var tensor = imageToTensor(Array.from(data.data));
    //   // console.log(Array.from(data.data));
    // }, 500);
//   };

  return (
    <div className="row center-col">
      {/* <h3 >Sign Study Mode:</h3> */}
      <p>Instructions: Sign the following letter.</p>
      <h3>Sign {answer}</h3>
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
      <canvas
        ref={canvasRef}
        style={{
          width: 600,
          height: 400
        }}
      />
        
      <p className="line-height-dense">score: {points}</p>
      <p className="line-height-dense">{guess ? `you just signed ${guess}. it was ${won ? `correct` : `wrong`}.` : "sign the letter and lock in!"}</p>
      <Button onClick={toggleSendFrame} variant="outlined"> Send Img </Button>
      
      {/* <canvas ref={photoRef} /> */}
      <div><Button disabled={!won} onClick={reset} variant="outlined">next</Button>
      <Button disabled={won} onClick={reset} variant="outlined">skip</Button></div>
      

    </div>
  );
}