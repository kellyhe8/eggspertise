import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterSpeakCol from "./components/CenterSpeakCol";
import LevelNavBar from "./components/LevelNavBar";
import React from 'react';


export default function Speak(props) {
  const [toggled, setToggled] = React.useState(false);

  const toggleHint = () => setToggled(!toggled);

  return (
    <>
      <Header/>
      <div className="column flex-row-center">
        <LeftNavCol/>
        { props.isLevel ? 
            props.globalName ? 
              <div>
                  <LevelNavBar />
                  <CenterSpeakCol globalName={props.globalName} toggled={toggled} toggleHint={toggleHint}/>
              </div> : 
              <p className="line-height-dense correct">Please go to the survey and fill it out first</p>
           : 
           <CenterSpeakCol toggled={toggled} toggleHint={toggleHint}/>
        }
      </div>
    </>
  );
}