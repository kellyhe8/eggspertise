// import LetterInput from "./LetterInput";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import HintFeature from './HintFeature';
import MediaPipe from "./MediaPipe";


export default function CenterPracticeCol(props) {

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [answer, setAnswer] = useState(alphabet[Math.floor(Math.random() * alphabet.length)]);
  const [guess, setGuess] = useState("");
  const [won, setWon] = useState(false);
  const [points, setPoints] = useState(0);

  const reset = () => {
    setGuess("");
    setWon(false);
    setAnswer(alphabet[Math.floor(Math.random() * alphabet.length)]);
    if (props.toggled) {
      // turn hint off for the next round
      props.toggleHint();
    }
  }

  const checkGuess = (guess) => {
    setPoints(answer.toUpperCase() === guess.toUpperCase() ? points + 1 : points);
    setWon(answer.toUpperCase() === guess.toUpperCase() || won ? true : false);
    setGuess(guess);
    return answer.toUpperCase() === guess.toUpperCase();
  }

  return (
    <div className="column">
      <div className="row center-col">
        {/* <h3 >Sign Study Mode:</h3> */}
        {/* <p>Instructions: Sign the following letter and lock in!</p> */}
        <p className="line-height-dense">Instructions: Sign the following letter and lock in!</p>
        
        <div className="pink-background row flex-row-center">
        <h3>Sign {answer}</h3>
        <h3 className="line-height-dense feedback">{guess ? `You just signed ${guess}. It was ${won ? `correct` : `wrong`}.` : ""}</h3>
          <div className="video-box">
            <MediaPipe onCheckGuess={checkGuess} isWon={won}/>
            <p className="line-height-dense">Score: {points}</p>
          </div>
          <div className="control-buttons">
            <Button disabled={!won} onClick={reset} variant="contained">next</Button>
            <Button disabled={won} onClick={reset} variant="contained">skip</Button>
          </div>
        </div>
        
      </div>
      <HintFeature toggled={props.toggled} toggleHint={props.toggleHint} answer={answer}/>
    </div>
  );
}