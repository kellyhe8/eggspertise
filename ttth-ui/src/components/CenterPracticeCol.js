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
        <p className="line-height-dense">Sign the given letter and submit to check!</p>
        
        <div className="pink-background row flex-row-center">
        <h3>Sign {answer}</h3>
        <h3 className={`line-height-dense ${won ? 'correct' : 'feedback'}`}>{guess ? `You just signed ${guess}. ${won ? `Good job! +1 point!` : `Wrong - try again.`}` : ""}</h3>
          <div className="video-box">
            <MediaPipe onCheckGuess={checkGuess} isWon={won}/>
            <p className="line-height-dense">Score: {points}</p>
          </div>
          <div className="control-buttons">
            <Button disabled={won} onClick={reset} variant="contained" size="small">skip</Button>
            <Button disabled={!won} onClick={reset} variant="contained" size="small">next</Button>
          </div>
        </div>
        
      </div>
      <HintFeature toggled={props.toggled} toggleHint={props.toggleHint} answer={answer}/>
    </div>
  );
}