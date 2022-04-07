// import LetterInput from "./LetterInput";
import React, { useEffect, useRef } from "react";
import * as tf from '@tensorflow/tfjs';

import axios from 'axios';

export default function CenterPracticeCol() {


  // function imageToTensor(rawImageData){
  //   //Function to convert jpeg image to tensors
  //   // const TO_UINT8ARRAY = true;
  //   // const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);
  //   const width = 64;
  //   const height = 64;
  //   const data = rawImageData;

  //   // Drop the alpha channel info for mobilenet
  //   const buffer = new Uint8Array(width * height * 3);
  //   let offset = 0; // offset into original data
  //   for (let i = 0; i < buffer.length; i += 3) {
  //     buffer[i] = data[offset];
  //     buffer[i + 1] = data[offset + 1];
  //     buffer[i + 2] = data[offset + 2];
  //     offset += 4;
  //   }
  //   return tf.tensor3d(buffer, [height, width, 3]);
  // }

  let request = (imgData) => {
    // e.preventDefault()
    // const body  = {
    //     "img": data
    // };

    var myDataObj = {"img": imgData}
    var formData = new FormData();

    for (var key in myDataObj) {
      formData.append(key, myDataObj[key])
    } 
    axios.post('http://127.0.0.1:5000', formData, {headers:{ 'Content-Type': 'multipart/form-data' }})
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
  }


  const videoRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ 
        video: { width: 500 } 

      })
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

  let handleClick = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    const width = 200;
    const height = 200;

    ctx.drawImage(video, 0, 0, width, height);
    // var data = photo.toDataURL('image/jpeg');
    var data = ctx.getImageData(0,0,width, height);
    var x = Array.from(data.data);
    request(Array.from(data.data));
  }

  const getImage = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    const width = 3;
    const height = 3;

    // return setInterval(() => {
    //   // ctx.drawImage(video, 0, 0, width, height);
    //   // var data = photo.toDataURL('image/jpeg');
    //   // var data = ctx.getImageData(0,0,width, height);
    //   // console.log(data.data)
    //   // request(data);
    //   // var tensor = imageToTensor(Array.from(data.data));
    //   // console.log(Array.from(data.data));
    // }, 500);
  };

  return (
    <div className="row center-col">
      {/* <h3 >Sign Study Mode:</h3> */}
      <p>Instructions: Sign the following letter.</p>
      <h3>Sign A</h3>
      <video ref={videoRef} onCanPlay={() => getImage()} />
        <canvas ref={photoRef} />
      {/* <LetterInput/> */}
      <button onClick={handleClick}> Send Img </button>
      
    </div>
  );
}