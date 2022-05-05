// import LetterInput from "./LetterInput";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import HintFeature from './HintFeature';
import MediaPipe from "./MediaPipe";
import { LearnImages } from "./LettersImages";



export default function CenterTutorialCol(props) {

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [answer, setAnswer] = useState(alphabet[Math.floor(Math.random() * alphabet.length)]);
  const [guess, setGuess] = useState("");
  const [won, setWon] = useState(false);
  const [feedback, setFeedback] = useState("");
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

  const checkGuess = (guessAndFeedback) => {
    const correct = answer.toUpperCase() === guessAndFeedback["guess"].toUpperCase()
    setPoints(correct ? points + 1 : points);
    setWon(correct || won ? true : false);
    setGuess(guessAndFeedback["guess"]);
    setFeedback(guessAndFeedback["feedback"]);
    if (correct && props.toggled) {
      // turn off hint after getting it right
      props.toggleHint();
    }
    return correct;
  }

  return (
    <div className="column">
      <div className="row center-col">
        <p className="line-height-dense">Sign the given letter and hold the pose!</p>
        
        <div className="pink-background row flex-row-center">
        <h3>{answer}</h3>
        <h3 className={`line-height-dense ${won ? 'correct' : 'feedback'}`}>{guess ? `You just signed ${guess}. ${won ? `Good job!` : `Wrong - try again.`}` : ""}</h3>
        <h3 className="line-height-dense feedback">{feedback}</h3>
          <div className="row">
            
            <img src={LearnImages[answer]} 
                style={{transform: "scaleX(-1)", marginBottom: "1em"}}
                alt="asl-letter-recognition" 
                width="600" 
                className="">
            </img>
            <div className="video-box">
            <MediaPipe onCheckGuess={checkGuess} answer={answer} isWon={won}/>

            
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