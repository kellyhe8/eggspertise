import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterHomeCol from "./components/CenterHomeCol";
import RightFeedbackCol from "./components/RightFeedbackCol";
import React from 'react';


export default function Home() {

  return (
    <>
      <Header/>
      <div className="column">
        <LeftNavCol/>
        <CenterHomeCol/>
        <RightFeedbackCol/>
      </div>
    </>
  );
}