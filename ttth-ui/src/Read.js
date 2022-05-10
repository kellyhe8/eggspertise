import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterReadCol from "./components/CenterReadCol";
import LevelNavBar from"./components/LevelNavBar";
import React from 'react';

export default function Read(props) {

  return (
    <>
      <Header/>
      <div className="column feed">
        <LeftNavCol/>
        { props.isLevel ? 
            props.globalName ? 
              <div>
                  <LevelNavBar />
                  <CenterReadCol globalName={props.globalName}/>
              </div> : 
              <p className="line-height-dense correct">Please go to the survey and fill it out first</p>
           : 
           <CenterReadCol/>
        }
      </div>
    </>
  );
}