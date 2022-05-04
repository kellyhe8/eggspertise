import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterNameCol from "./components/CenterNameCol";
import React from 'react';


export default function Survey(props) {
  
  return (
    <>
      <Header/>
      <div className="column flex-row-center">
        <LeftNavCol/>
        <CenterNameCol onSetGlobalName={props.onSetGlobalName}/>
      </div>
    </>
  );
}