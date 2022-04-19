import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
import Home from './Home';
import Recognize from './Learn';
import Sign from './Practice';

// import axios from 'axios';


// import * as tf from '@tensorflow/tfjs';
// import * as jpeg from 'jpeg-js'


// import MyApp from './leap/LeapData';
// import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New'",
    fontSize: 16
  },
  palette: {
    primary: {
      main: "#345995", // blue
    },
    secondary: {
      main: "#6A8D73" // green
    },
    text: {
      primary: "#345995", // blue
      secondary: "#345995" // blue
    }
  },
});

function App() {

  // const [count, setCount] = useState(0);
  
  // let request = () => {
  //   e.preventDefault()
  //   const params  = {
  //       img: "[asdasdasd]"
  //   };
  //   axios.post('http://127.0.0.1:5000', {}, { args: { img : count }})
  //       .then((res) => {
  //           console.log(res.data)
  //       }).catch((error) => {
  //           console.log(error)
  //       });
  //   setCount(count + 1)
  // }
  
  return (
    <div>
      <Router>
          <div className="App">
        <ThemeProvider theme={theme}>
        {/* <header className="App-header"> */}
        {/* <Header/> */}
          <Routes>
            
            {/* <hr/> */}
            <Route path="/" element={<Home />} />
            {/* <Route exact path="/" element={<Home/>} /> */}
            <Route path="/learn" element={<Recognize/>} />
            <Route path="/practice" element={<Sign/>} />
            <Route path="*" element={<Home/>}/>
          </Routes>
          {/* <Home/>
          <Recognize/>
          <Sign/> */}
          {/* <button onClick={request}>request</button>
          <p>requested {count} times</p> */}
          
        {/* </header> */}
        </ThemeProvider>
      </div>
      </Router>
        {/* <video ref={videoRef} onCanPlay={() => getImage()} />
        <canvas ref={photoRef} /> */}

    </div>
  );
}

export default App;
