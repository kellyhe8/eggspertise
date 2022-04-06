import LetterInput from "./LetterInput";
import React from 'react';


export default function CenterRecognizeCol() {

  return (
    <div className="row center-col">
      <p>Say the letter aloud or select the answer below.</p>
      
      <video>*Insert gesture here RECOGNIZE*</video>
      <LetterInput/>
    </div>
  );
}