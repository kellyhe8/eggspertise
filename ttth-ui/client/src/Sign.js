import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterSignCol from "./components/CenterSignCol";
import RightFeedbackCol from "./components/RightFeedbackCol";
import React from 'react';


export default function Sign() {

  return (
    <>
      <Header/>
      <div className="column feed">
        <LeftNavCol/>
        <CenterSignCol/>
        <RightFeedbackCol/>
      </div>
    </>
  );
}