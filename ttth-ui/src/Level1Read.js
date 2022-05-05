import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterLevel1Read from "./components/CenterLevel1ReadCol";
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
              <CenterLevel1Read globalName={props.globalName}/>
          </div> : 
          "Please go to the survey and fill it out first"
        }
      </div>
    </>
  );
}