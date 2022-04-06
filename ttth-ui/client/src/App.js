import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Recognize from './Recognize';
import Sign from './Sign';

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

  // function imageToTensor(rawImageData){
  //   //Function to convert jpeg image to tensors
  //   const TO_UINT8ARRAY = true;
  //   const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);
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

      {/* <LeapData /> */}
    </div>
  );
}

export default App;
