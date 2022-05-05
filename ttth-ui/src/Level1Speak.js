import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterLevel1Speak from "./components/CenterLevel1SpeakCol";
import LevelNavBar from"./components/LevelNavBar";
import React from 'react';


export default function Level1Read(props) {
//   const [toggled, setToggled] = React.useState(false);

//   const toggleHint = () => setToggled(!toggled);

  return (
    <>
      <Header/>
      <div className="column flex-row-center">
        <LeftNavCol/>
        { props.globalName ? 
          <div>
              <LevelNavBar />
              <CenterLevel1Speak globalName={props.globalName}/>
          </div> : 
          <p>Please go to the survey and fill it out first</p>
        }
      </div>
    </>
  );
}