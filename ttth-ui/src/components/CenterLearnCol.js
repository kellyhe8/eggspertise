// import LetterInput from "./LetterInput";
import React, { useState } from "react";
import Button from '@mui/material/Button';
// import HintFeature from './HintFeature';
import MediaPipe from "./MediaPipe";
import { LearnImages } from "./LettersImages";


export default function CenterLearnCol(props) {
  const alphabet = props.globalName ? props.globalName.toUpperCase().replace(/\s/g, "").split('') : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [answer, setAnswer] = useState(props.globalName ? alphabet[0] : alphabet[Math.floor(Math.random() * alphabet.length)]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [won, setWon] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [points, setPoints] = useState(0);

  const reset = () => {
    if (props.globalName) {
      const newIndex = (currentIndex + 1) % alphabet.length
      setCurrentIndex(newIndex)
      setAnswer(alphabet[newIndex]);
    }
    else {
      setAnswer(alphabet[props.globalName ? 0 : Math.floor(Math.random() * alphabet.length)]);
    }
    setGuess("");
    setWon(false);
    setFeedback("");
    
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
        <h3 style={{marginBottom: "0"}}>{answer}</h3>
        <p 
        className={`line-height-dense ${won ? 'correct' : 'feedback'}`}
        style={{marginBottom: "0"}}
        >{guess ? `That looked like a ${guess} to us. ${won ? `Good job!` : `Wrong - try again.`}` : ""}</p>
        {feedback ? <h3 className="line-height-dense feedback">{feedback}</h3> : ""}
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