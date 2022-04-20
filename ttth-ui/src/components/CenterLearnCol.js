import React, { useState } from 'react';

import LetterInput from "./LetterInput";
import HintFeature from './HintFeature';
import { LearnImages } from "./LettersImages";


export default function CenterLearnCol(props) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [answer, setAnswer] = useState(alphabet[Math.floor(Math.random() * alphabet.length)]);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [won, setWon] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextLetter = () => {
    setAnswer(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

  const setShowAnswerTrue = () => {
    // if showing answer, -1 point and untoggle the hint if it's on
    setScore(score - 1);
    if (props.toggled) {
      props.toggleHint();
    }
    setShowAnswer(true);
  }

  const checkGuess = (guess) => {
    if (!showAnswer) {
      // if they didn't just look at the answer, then check
      setScore(answer.toUpperCase() === guess.toUpperCase() ? score + 1 : score);
      setWon(answer.toUpperCase() === guess.toUpperCase() || won ? true : false);
      setGuess(guess);
      setGuesses([...guesses, guess])
      return answer.toUpperCase() === guess.toUpperCase();
    } else {
      // otherwise don't do anything
      return false;
    }
  }
  
  const reset = () => {
    if (showAnswer) {
      
    }
    setGuess("");
    setGuesses([]);
    setWon(false);
    setShowAnswer(false);
    nextLetter();
    if (props.toggled) {
      props.toggleHint();
    }
  }

  return (
    <div className="column">
      <div className="row center-col">
        <p className="line-height-dense">Say the letter aloud or select the answer below.</p>

        <div className="pink-background row flex-row-center">
        <h3 className="line-height-dense feedback">
          {showAnswer ? "You cheated! -1 point!" 
            : guess ? `You guessed "${guess}". ${won ? "Good job! +1 point!" : "Try again."}` 
              : "Select an answer."} 
          </h3>

          <div className="video-box">
            <img src={LearnImages[answer]} 
              alt="asl-letter-recognition" 
              width="500" 
              className="">
            </img>
            <p className="line-height-dense"> Score: {score} </p>
          </div>
          
          <LetterInput 
            answer={answer} 
            guesses={guesses}
            won={won}
            nextLetter={nextLetter.bind(this)} 
            reset={reset.bind(this)} 
            checkGuess={checkGuess.bind(this)}
            showAnswer={showAnswer} 
            setShowAnswerTrue={setShowAnswerTrue}
          />

        </div>
      </div>
      <HintFeature toggled={props.toggled} toggleHint={props.toggleHint} answer={answer}/>
    </div>
  );
}