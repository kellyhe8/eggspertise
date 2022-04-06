import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CenterRecognizeCol from './components/CenterRecognizeCol';
// import LeftNavCol from './components/LeftNavCol';
// import RightFeedbackCol from './components/RightFeedbackCol';
import Home from './Home';
import Recognize from './Recognize';
import Sign from './Sign';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#345995",
//     },
//   },
// });

function App() {
  return (
    
      <Router>
        <div className="App">
      {/* <ThemeProvider theme={theme}> */}
      {/* <header className="App-header"> */}
        <Routes>
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

  );
}

export default App;
