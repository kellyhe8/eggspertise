// import LetterInput from "./LetterInput";
import React from 'react';

import homepageImg from "../images/homepage_img.png"
import { ImagesByLetter } from "./LettersImages";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function CenterHomeCol() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const colors = ["pink", "green", "black", "blue"];
  return (
    <div className="row center-col">
      <h2 className="line-height-dense">Welcome to Talk to the Hand!</h2>
      <p className="line-height-dense">
        Learn ASL with interactive practice and feedback.
      </p>
      <img src={homepageImg}
        alt="alphabet-cheat-sheet" 
        width="500" 
        className="pink-background">
      </img>
      {/* <LetterInput/> */}
      <br/>
      
      <p className="line-height-dense">
      Learn: flashcard-style learning.
      </p>
      <p className="line-height-dense">
      Practice: sign letters and see how accurate you are!
      </p>
      <br/>
      <p className="line-height-dense">
        Below you'll find examples of each letter from different angles.
      </p>
      <br/>
      {
        alphabet.map((letter, j) => {
          return (
          <div className={`${colors[j%colors.length]}-background row`} style={{marginTop: 10, marginBottom: 10}}>
            <h2 key={`${letter}Title`}>{letter}</h2>
            <ImageList variant="standard" cols={3} gap={8} key={`${letter}List`}>
              {ImagesByLetter[letter].map((item, i) => (
                <ImageListItem key={`${letter}${i}`}>
                  <img
                    src={item}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>)
        })
      }
      
    </div>
  );
}