// import LetterInput from "./LetterInput";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import HintFeature from './HintFeature';
import MediaPipe from "./MediaPipe";
import { LearnImages } from "./LettersImages";
import LevelNavBar from "./LevelNavBar";



export default function CenterLevel1LearnCol(props) {
  const alphabet = props.globalName ? props.globalName.toUpperCase().replace(/\s/g, "").split('') : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState(alphabet[currentIndex]);
  const [guess, setGuess] = useState("");
  const [won, setWon] = useState(false);
  const [points, setPoints] = useState(0);

  const reset = () => {
    const newIndex = (currentIndex + 1) % alphabet.length
    setCurrentIndex(newIndex)
    setGuess("");
    setWon(false);
    setAnswer(alphabet[newIndex]);
    if (props.toggled) {
      // turn hint off for the next round
      props.toggleHint();
    }
  }

  const checkGuess = (guess) => {
    const correct = answer.toUpperCase() === guess.toUpperCase()
    setPoints(correct ? points + 1 : points);
    setWon(correct || won ? true : false);
    setGuess(guess);
    if (correct && props.toggled) {
      // turn off hint after getting it right
      props.toggleHint();
    }
    return correct;
  }

  return (
    <div className="column">
      <div className="row center-col">
        <p className="line-height-dense">Welcome {props.globalName}! We will begin learning how to sign your name. </p>
        <p className="line-height-dense">Sign the given letter and submit to check!</p>
        
        <div className="pink-background row flex-row-center">
        <h3>{answer}</h3>
        <h3 className="line-height-dense feedback">{guess ? `You just signed ${guess}. ${won ? `Good job!` : `Wrong - try again.`}` : ""}</h3>
          <div className="row">
            
            <img src={LearnImages[answer]} 
                style={{transform: "scaleX(-1)"}}
                alt="asl-letter-recognition" 
                width="600" 
                className="">
            </img>
            <div className="video-box">
            <MediaPipe onCheckGuess={checkGuess} isWon={won}/>

            
            </div>
            <div className="control-buttons">
            <Button disabled={won} onClick={reset} variant="contained" size="small">skip</Button>
            <Button disabled={!won} onClick={reset} variant="contained" size="small">next</Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}