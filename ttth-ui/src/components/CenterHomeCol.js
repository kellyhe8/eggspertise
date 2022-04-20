// import LetterInput from "./LetterInput";
import React from 'react';

import homepageImg from "../images/homepage_img.png"
import { ImagesByLetter } from "./LettersImages";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function CenterHomeCol() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const colors = ["green", "black", "blue", "pink"];
  return (
    <div className="row center-col">
      <h2 className="line-height-dense">Welcome to Talk to the Hand</h2>
      <p className="line-height-dense">
        Learn ASL with interactive practice and feedback!
      </p>
      <img src={homepageImg}
        alt="alphabet-cheat-sheet" 
        width="650" 
        className="pink-background">
      </img>
      <br/>
      
      <p className="line-height-dense">
      <b>Learn Mode:</b> flashcard-style learning.
      </p>
      <p className="line-height-dense">
      <b>Practice Mode:</b> sign letters and see how accurate you are!
      </p>
      <br/>
      <p className="line-height-dense">
        Below you'll find examples of each letter from different angles.
      </p>
      <br/>
      {
        alphabet.map((letter, j) => {
          return (
          <div className={`flex-col-center`} style={{marginTop: 10, marginBottom: 10}}>
            <h2 key={`${letter}Title`} style={{marginRight: 20}}>{letter}</h2>
            <div className={`${colors[j%colors.length]}-background`} style={{paddingTop: 0, paddingBottom: 0}}>
            <ImageList variant="standard" cols={3} gap={8} key={`${letter}List`}>
              {ImagesByLetter[letter].map((item, i) => (
                <ImageListItem key={`${letter}${i}`}>
                  <img
                    src={item}
                    alt="letter-example"
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            </div>
          </div>)
        })
      }
      
    </div>
  );
}