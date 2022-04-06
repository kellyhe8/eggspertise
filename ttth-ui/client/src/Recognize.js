import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterRecognizeCol from "./components/CenterRecognizeCol";
import RightFeedbackCol from "./components/RightFeedbackCol";
import React from 'react';


export default function Recognize() {

  return (
    <>
      <Header/>
      <div className="column feed">
        <LeftNavCol/>
        <CenterRecognizeCol/>
        <RightFeedbackCol/>
      </div>
    </>
  );
}