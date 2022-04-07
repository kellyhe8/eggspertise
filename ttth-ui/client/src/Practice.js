import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterPracticeCol from "./components/CenterPracticeCol";
import RightFeedbackCol from "./components/RightFeedbackCol";
import React from 'react';


export default function Sign() {

  return (
    <>
      <Header/>
      <div className="column feed">
        <LeftNavCol/>
        <CenterPracticeCol/>
        <RightFeedbackCol/>
      </div>
    </>
  );
}