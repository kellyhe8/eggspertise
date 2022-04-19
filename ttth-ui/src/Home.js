import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterHomeCol from "./components/CenterHomeCol";
import React from 'react';


export default function Home() {
  
  return (
    <>
      <Header/>
      <div className="column flex-row-center">
        <LeftNavCol/>
        <CenterHomeCol/>
      </div>
    </>
  );
}