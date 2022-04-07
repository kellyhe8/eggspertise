import LetterInput from "./LetterInput";
import React from 'react';

import homepageImg from "../images/homepage_img.png"


export default function CenterHomeCol() {

  return (
    <div className="row center-col">
      <p className="code">*HOME*</p>
      <img src={homepageImg}
        alt="alphabet-cheat-sheet" 
        width="500" 
        className="img-background">
      </img>
      <LetterInput/>
    </div>
  );
}