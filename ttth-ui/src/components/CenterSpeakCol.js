// import LetterInput from "./LetterInput";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import HintFeature from './HintFeature';
import MediaPipe from "./MediaPipe";


export default function CenterSpeakCol(props) {
  const alphabet = props.globalName ? props.globalName.toUpperCase().replace(/\s/g, "").split('') : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState(props.globalName ? alphabet[0] : alphabet[Math.floor(Math.random() * alphabet.length)]);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [won, setWon] = useState(false);
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
    // setAnswer(alphabet[Math.floor(Math.random() * alphabet.length)]);
    if (props.toggled) {
      // turn hint off for the next round
      props.toggleHint();
    }
  }

  const checkGuess = (guessAndFeedback) => {
    // console.log("GUESS AND FEEDBACK", guessAndFeedback)
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
        <h3 style={{marginBottom: "0"}}>Sign {answer}</h3>
        <p className={`line-height-dense ${won ? 'correct' : 'feedback'}`}>{guess ? `That looked like a ${guess} to us. ${won ? `Good job! +1 point!` : `Wrong - try again.`}` : ""}</p>
        {feedback ? <h3 className="line-height-dense feedback">{feedback}</h3> : ""}
          <div className="video-box">
            <MediaPipe onCheckGuess={checkGuess} answer={answer} isWon={won}/>
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