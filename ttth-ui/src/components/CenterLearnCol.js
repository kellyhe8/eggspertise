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

  const nextLetter = () => {
    setAnswer(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

  const checkGuess = (guess) => {
    setScore(answer.toUpperCase() === guess.toUpperCase() ? score + 1 : score);
    setWon(answer.toUpperCase() === guess.toUpperCase() || won ? true : false);
    setGuess(guess);
    setGuesses([...guesses, guess])
    return answer.toUpperCase() === guess.toUpperCase();
  }
  
  const reset = () => {
    if (!won) {
      setScore(score - 1)
    }
    setGuess("");
    setGuesses([]);
    setWon(false);
    nextLetter();
  }

  return (
    <div className="column">
      <div className="row center-col">
        <p className="line-height-dense">Say the letter aloud or select the answer below.</p>

        <div className="pink-background row flex-row-center">
        <h3 className="line-height-dense feedback">{guess ? `You just guessed "${guess}". It was ${won ? "correct. +1 point for you" : "wrong try again"}.` : "Select an answer."} </h3>

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
          />

        </div>
      </div>
      <HintFeature toggled={props.toggled} toggleHint={props.toggleHint} answer={answer}/>
    </div>
  );
}