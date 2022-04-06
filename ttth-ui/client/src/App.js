import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    async function loadModel(){
      console.log("[+] Application started")
      //Wait for tensorflow module to be ready
      const tfReady = await tf.ready();
      console.log("[+] Loading custom mask detection model")
      //Replce model.json and group1-shard.bin with your own custom model
      const modelJson = await require("./assets/model/model.json");
      const modelWeight = await require("./assets/model/group1-shard.bin");
      const maskDetector = await tf.loadLayersModel(bundleResourceIO(modelJson,modelWeight));
      console.log("[+] Loading pre-trained face detection model")
      //Blazeface is a face detection model provided by Google
      const faceDetector =  await blazeface.load();
      //Assign model to variable
      setMaskDetector(maskDetector)
      setFaceDetector(faceDetector)
      console.log("[+] Model Loaded")
    }
    loadModel()
  }, []); 

  function imageToTensor(rawImageData){
    //Function to convert jpeg image to tensors
    const TO_UINT8ARRAY = true;
    const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
