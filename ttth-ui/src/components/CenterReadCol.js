import React, { useState } from 'react';

import LetterInput from "./LetterInput";
import { LearnImages } from "./LettersImages";
import SpeechDetection from "./SpeechDetectionLearn";
import Button from '@mui/material/Button';



export default function CenterReadCol(props) {
  const alphabet = props.globalName ? props.globalName.toUpperCase().replace(/\s/g, "").split('') : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [currentIndex, setCurrentIndex] = useState(0);
  // const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [answer, setAnswer] = useState(props.globalName ? alphabet[0] : alphabet[Math.floor(Math.random() * alphabet.length)]);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [won, setWon] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [hintLetterSubset, setHintLetterSubset] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
  const [hintsSeen, setHintsSeen] = useState(0);

  const shuffleArray = (arr) => {
    for (var i = arr.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  const hintGetNewSubset = () => {
    const letterSubsetWithoutAnswer = shuffleArray(hintLetterSubset.filter((letter) => letter !== answer));
    const lengthOfNewSubset = letterSubsetWithoutAnswer.length/2;
    const newLetterSubset = letterSubsetWithoutAnswer.slice(0, lengthOfNewSubset);
    newLetterSubset.push(answer);
    const letterSubsetWithAnswer = shuffleArray(newLetterSubset);
    setHintLetterSubset(letterSubsetWithAnswer);
  }

  const showHint = () => {
    setHintsSeen(hintsSeen + 1)
    hintGetNewSubset();
  }

  const nextLetter = () => {
    if (props.globalName) {
      const newIndex = (currentIndex + 1) % alphabet.length
      setCurrentIndex(newIndex)
      setAnswer(alphabet[newIndex]);
    } else {
      setAnswer(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
  }

  const setShowAnswerTrue = () => {
    // if showing answer, -1 point
    setScore(score - 1);
    setShowAnswer(true);
  }

  const checkGuess = (guess) => {
    if (!showAnswer) {
      // if they didn't just look at the answer, then check
      guess = guess.toUpperCase()
      setScore(answer.toUpperCase() === guess ? score + 1 : score);
      setWon(answer.toUpperCase() === guess || won ? true : false);
      setGuess(guess);
      setGuesses([...guesses, guess])
      return answer.toUpperCase() === guess;
    } else {
      // otherwise don't do anything
      return false;
    }
  }
  
  const reset = () => {
    setGuess("");
    setGuesses([]);
    setHintsSeen(0);
    setHintLetterSubset("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
    setWon(false);
    setShowAnswer(false);
    nextLetter();
  }

  return (
    <div className="column">
      <div className="row center-col">
        <p className="line-height-dense">Say the letter aloud or select the answer below.</p>

        <div className="pink-background row flex-row-center">
        <h3 className={`line-height-dense ${won ? 'correct' : 'feedback'}`}>
          {showAnswer ? "You cheated! -1 point!" 
            : guess ? `You guessed "${guess}". ${won ? "Good job! +1 point!" : "Wrong - try again."}` 
              : "Select an answer."} 
          </h3>

          <div className="video-box" >
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
            hintAnswers={hintLetterSubset}
            won={won}
            nextLetter={nextLetter.bind(this)} 
            reset={reset.bind(this)}
            checkGuess={checkGuess.bind(this)}
            showAnswer={showAnswer} 
            setShowAnswerTrue={setShowAnswerTrue}
          />

        </div>
      </div>
      <div className="row" style={{minWidth: "200px"}}>
        <Button 
          sx={{mb: "10px"}} 
          color="secondary" 
          variant="outlined" 
          size="small"
          onClick={showHint}
          disabled={won || hintLetterSubset.length <= 2}
        >
            {hintsSeen === 0 ? "Get Hint" : hintsSeen === 4 ?  "No more hints" : "Another Hint"}
        </Button> 
        <br/>
        <SpeechDetection won={won} showAnswer={showAnswer} onCheckGuess={checkGuess} onNext={reset} onViewAnswer={setShowAnswerTrue}/>
        
      </div>
      
    </div>
  );
}