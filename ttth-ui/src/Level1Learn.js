import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterLevel1Learn from "./components/CenterLevel1LearnCol";
import LevelNavBar from"./components/LevelNavBar";
import React from 'react';


export default function Level1Learn(props) {
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
              <CenterLevel1Learn globalName={props.globalName}/>
          </div> : 
          <p className="line-height-dense correct">Please go to the survey and fill it out first</p>
        }
      </div>
    </>
  );
}