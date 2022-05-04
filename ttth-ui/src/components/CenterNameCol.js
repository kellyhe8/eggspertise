// import LetterInput from "./LetterInput";
import React from 'react';

import NameQuestionnaire from "./NameQuestionnaire";

export default function CenterNameCol(props) {
  const colors = ["green", "black", "blue", "pink"];
  return (
    <div className="row center-col">
      <h2 className="line-height-dense">Welcome to Talk to the Hand</h2>
      <p className="line-height-dense">
          We will begin with a very brief survey
      </p>

      <br/>
      <NameQuestionnaire onSetGlobalName={props.onSetGlobalName}/>
      <br/>
      
    </div>
  );
}