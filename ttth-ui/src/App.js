import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
import Home from './Home';
import Recognize from './Learn';
import Sign from './Practice';

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
  
  return (
    <div>
      <Router>
        <div className="App">
          <ThemeProvider theme={theme}>
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Recognize/>} />
              <Route path="/practice" element={<Sign/>} />
              <Route path="*" element={<Home/>}/>
            </Routes>
            
          </ThemeProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
