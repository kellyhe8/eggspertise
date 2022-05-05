import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterReadCol from "./components/CenterReadCol";
import LevelNavBar from"./components/LevelNavBar";
import React from 'react';

export default function Read(props) {
  const [toggled, setToggled] = React.useState(false);

  const toggleHint = () => setToggled(!toggled);

  return (
    <>
      <Header/>
      <div className="column feed">
        <LeftNavCol/>
        { props.isLevel ? 
            props.globalName ? 
              <div>
                  <LevelNavBar />
                  <CenterReadCol globalName={props.globalName} toggled={toggled} toggleHint={toggleHint}/>
              </div> : 
              <p className="line-height-dense correct">Please go to the survey and fill it out first</p>
           : 
           <CenterReadCol toggled={toggled} toggleHint={toggleHint}/>
        }
      </div>
    </>
  );
}