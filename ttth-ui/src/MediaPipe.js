import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterMediaPipe from "./components/CenterMediaPipe";
import React from 'react';


export default function Sign() {

  return (
    <>
      <Header/>
      <div className="column feed">
        <LeftNavCol/>
        <CenterMediaPipe/>
      </div>
    </>
  );
}