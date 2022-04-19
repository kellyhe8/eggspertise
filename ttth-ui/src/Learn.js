import Header from "./components/Header";
import LeftNavCol from "./components/LeftNavCol";
import CenterLearnCol from "./components/CenterLearnCol";
import React from 'react';


export default function Recognize() {
  const [toggled, setToggled] = React.useState(false);

  const toggleHint = () => setToggled(!toggled);

  return (
    <>
      <Header/>
      <div className="column feed">
        <LeftNavCol/>
        <CenterLearnCol toggled={toggled} toggleHint={toggleHint}/>
      </div>
    </>
  );
}