import React, { useState } from 'react';

import LetterInput from "./LetterInput";
import HintFeature from './HintFeature';

// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import a from '../images/alphabet/a.jpeg';
import b from '../images/alphabet/b.jpeg';
import c from '../images/alphabet/c.jpeg';
import d from '../images/alphabet/d.jpeg';
import e from '../images/alphabet/e.jpeg';
import f from '../images/alphabet/f.jpeg';
import g from '../images/alphabet/g.jpeg';
import h from '../images/alphabet/h.jpeg';
import i from '../images/alphabet/i.jpeg';
import j from '../images/alphabet/j.jpeg';
import k from '../images/alphabet/k.jpeg';
import l from '../images/alphabet/l.jpeg';
import m from '../images/alphabet/m.jpeg';
import n from '../images/alphabet/n.jpeg';
import o from '../images/alphabet/o.jpeg';
import p from '../images/alphabet/p.jpeg';
import q from '../images/alphabet/q.jpeg';
import r from '../images/alphabet/r.jpeg';
import s from '../images/alphabet/s.jpeg';
import t from '../images/alphabet/t.jpeg';
import u from '../images/alphabet/u.jpeg';
import v from '../images/alphabet/v.jpeg';
import w from '../images/alphabet/w.jpeg';
import x from '../images/alphabet/x.jpeg';
import y from '../images/alphabet/y.jpeg';
import z from '../images/alphabet/z.jpeg';


export default function CenterLearnCol(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // let ind = Math.floor(Math.random() * 26);
  // let answer = alphabet[ind];
  const images = {a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z}

  const [answer, setAnswer] = useState(alphabet[Math.floor(Math.random() * 26)]);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [won, setWon] = useState(false);
  const [score, setScore] = useState(0);

  const nextLetter = () => {
    setAnswer(alphabet[Math.floor(Math.random() * 26)]);
  }

  const checkGuess = (guess) => {
    // console.log("CHECKING GUESS", guess)
    setScore(answer === guess ? score + 1 : score);
    setWon(answer === guess || won ? true : false);
    setGuess(guess);
    setGuesses([...guesses, guess])
    return answer === guess;
  }
  
  const reset = () => {
    if (!won) {
      setScore(score - 1)
    }
    setGuess("");
    setGuesses([]);
    setWon(false);
    // setState({
    //   input: "",
    //   guesses: [],
    //   won: false
    // })
    nextLetter();
  }

  // const [guessed, addGuess] = useState([]);
  // addGuess(guess => [...guessed, guess])
  // const guessed = []

  // const state = {
    // input: "", // the current input
    // guesses: [], // keep track of everything they've guessed
    // won: false, // set to true if they get it right, then reset?
  // }

  // const checkGuess = (guess) => {
    // state.input = guess; 
    // state.guesses = [...state.guesses, guess];
    // state.won = answer == guess
    // addGuess(guess);
    // this.setState(state => ({
    //   input: guess,
    //   guesses: [...state.guesses, guess],
    //   won: answer == guess
    // }))
    // console.log("guessed", guess, state.guesses, guessed.includes("q"))
  // }

  return (
    <div className="row center-col">
      <p>Say the letter aloud or select the answer below.</p>

      <div className="pink-background row flex-row-center">
      <h3 className="line-height-dense">{guess ? `You just guessed "${guess}". it was ${won ? "correct. +1 point for you" : "wrong try again"}.` : "Select an answer."} </h3>

        <div className="video-box">
          <img src={images[answer]} 
            alt="asl-letter-recognition" 
            width="500" 
            className="">
          </img>
          <p className="line-height-dense"> score: {score} </p>
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
      
      <HintFeature toggled={props.toggled} toggleHint={props.toggleHint}/>

    </div>
  );
}