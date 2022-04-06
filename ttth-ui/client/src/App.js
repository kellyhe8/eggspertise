import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import Home from './Home';
import Recognize from './Recognize';
import Sign from './Sign';

import * as tf from '@tensorflow/tfjs';
import * as jpeg from 'jpeg-js'


import MyApp from './leap/LeapData';
// import Header from './components/Header';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#345995",
//     },
//   },
// });

function App() {
  // useEffect(() => {
  //   async function loadModel(){
  //     console.log("[+] Application started")
  //     //Wait for tensorflow module to be ready
  //     const tfReady = await tf.ready();
  //     console.log("[+] Loading custom mask detection model")
  //     //Replce model.json and group1-shard.bin with your own custom model
  //     const modelJson = await require("./assets/model/model.json");
  //     const modelWeight = await require("./assets/model/group1-shard.bin");
  //     const maskDetector = await tf.loadLayersModel(bundleResourceIO(modelJson,modelWeight));
  //     console.log("[+] Loading pre-trained face detection model")
  //     //Blazeface is a face detection model provided by Google
  //     const faceDetector =  await blazeface.load();
  //     //Assign model to variable
  //     setMaskDetector(maskDetector)
  //     setFaceDetector(faceDetector)
  //     console.log("[+] Model Loaded")
  //   }
  //   loadModel()
  // }, []); 

  function imageToTensor(rawImageData){
    //Function to convert jpeg image to tensors
    const TO_UINT8ARRAY = true;
    // const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);
    const width = 64;
    const height = 64;
    const data = rawImageData;

    // Drop the alpha channel info for mobilenet
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0; // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];
      offset += 4;
    }
    return tf.tensor3d(buffer, [height, width, 3]);
  }


  const videoRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();

        // let track;
        // setInterval(() => {
        //   track = stream.getVideoTracks()[0];
        // }, 200);
        // let imageCapture = new ImageCapture(track);
        // console.log(imageCapture);
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  const getImage = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    const width = 64;
    const height = 64;
    photo.width = width;
    photo.height = height;

    console.log(photoRef.current);
    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
      // var data = photo.toDataURL('image/jpeg');
      var data = ctx.getImageData(0,0,width, height);
      var tensor = imageToTensor(Array.from(data.data));
    }, 500);
  };

  return (
    <div>
      <Router>
          <div className="App">
        {/* <ThemeProvider theme={theme}> */}
        {/* <header className="App-header"> */}
        {/* <Header/> */}
          <Routes>
            
            {/* <hr/> */}
            <Route path="/" element={<Home />} />
            {/* <Route exact path="/" element={<Home/>} /> */}
            <Route path="/recognize" element={<Recognize/>} />
            <Route path="/sign" element={<Sign/>} />
            <Route path="*" element={<Home/>}/>
          </Routes>
          {/* <Home/>
          <Recognize/>
          <Sign/> */}
          
        {/* </header> */}
        {/* </ThemeProvider> */}
      </div>
      </Router>
        <video ref={videoRef} onCanPlay={() => getImage()} />
        <canvas ref={photoRef} />

    </div>
  );
}

export default App;
