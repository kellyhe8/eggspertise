import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterTutorialCol from "./components/CenterTutorialCol";
import React from 'react';


export default function Tutorial() {
//   const [toggled, setToggled] = React.useState(false);

//   const toggleHint = () => setToggled(!toggled);

  return (
    <>
      <Header/>
      <div className="column flex-row-center">
        <LeftNavCol/>
        <CenterTutorialCol/>
      </div>
    </>
  );
}