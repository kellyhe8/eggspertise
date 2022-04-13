import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterLearnCol from "./components/CenterLearnCol";
import React from 'react';


export default function Recognize() {

  return (
    <>
      <Header/>
      <div className="column feed">
        <LeftNavCol/>
        <CenterLearnCol/>
      </div>
    </>
  );
}