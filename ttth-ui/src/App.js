import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from './Home';
import Read from './Read';
import Sign from './Speak';
import Learn from'./Learn';
import Survey from './Survey';

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


export default function App() {
  const [globalName, setGlobalName] = useState("");

  console.log(globalName);
  return (
    <div>
      <Router>
        <div className="App">
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/survey" element={<Survey onSetGlobalName={setGlobalName}/>} />
              <Route path="/learning_1" element={<Learn isLevel={true} globalName={globalName}/>}/>
              <Route path="/reading_1" element={<Read isLevel={true} globalName={globalName}/>} />
              <Route path="/speaking_1" element={<Sign isLevel={true} globalName={globalName} />} />
              <Route path="/learning" element={<Learn/>} />
              <Route path="/reading" element={<Read/>} />
              <Route path="/speaking" element={<Sign/>} />
              <Route path="*" element={<Home />}/>
            </Routes>
            
          </ThemeProvider>
        </div>
      </Router>
    </div>
  );
}