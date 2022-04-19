import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterPracticeCol from "./components/CenterPracticeCol";
import React from 'react';


export default function Practice() {
  const [toggled, setToggled] = React.useState(true);

  const toggleHint = () => setToggled(!toggled);

  return (
    <>
      <Header/>
      <div className="column flex-row-center">
        <LeftNavCol/>
        <CenterPracticeCol toggled={toggled} toggleHint={toggleHint}/>
      </div>
    </>
  );
}