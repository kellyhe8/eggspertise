import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterLearnCol from "./components/CenterLearnCol";
import RightFeedbackCol from "./components/RightFeedbackCol";
import React from 'react';


export default function Recognize() {

  return (
    <>
      <Header/>
      <div className="column feed">
        <LeftNavCol/>
        <CenterLearnCol/>
        <RightFeedbackCol/>
      </div>
    </>
  );
}