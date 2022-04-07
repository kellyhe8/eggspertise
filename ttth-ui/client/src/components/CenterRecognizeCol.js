import LetterInput from "./LetterInput";
import React, { useState } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
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


export default function CenterRecognizeCol() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let ind = Math.floor(Math.random() * 26);
  let answer = alphabet[ind];
  
  const images = {a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z}

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

      <img src={images[answer]} 
        alt="asl-letter-recognition" 
        width="500" 
        className="img-background">
      </img>
      <LetterInput answer={answer}/>

      {/* <div className='letterinput'>
        <p>{this.props.answer}</p>
        <ButtonGroup color="secondary" aria-label="outlined secondary button group">
          <Button disabled={guessed.includes("q")} onClick={() => checkGuess("q")}>Q</Button>
          <Button disabled={guessed.includes("w")} onClick={() => checkGuess("w")}>W</Button>
          <Button disabled={guessed.includes("e")} onClick={() => checkGuess("e")}>E</Button>
          <Button disabled={guessed.includes("r")} onClick={() => checkGuess("r")}>R</Button>
          <Button disabled={guessed.includes("t")} onClick={() => checkGuess("t")}>T</Button>
          <Button disabled={guessed.includes("y")} onClick={() => checkGuess("y")}>Y</Button>
          <Button disabled={guessed.includes("u")} onClick={() => checkGuess("u")}>U</Button>
          <Button disabled={guessed.includes("i")} onClick={() => checkGuess("i")}>I</Button>
          <Button disabled={guessed.includes("o")} onClick={() => checkGuess("o")}>O</Button>
          <Button disabled={guessed.includes("p")} onClick={() => checkGuess("p")}>P</Button>
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="outlined secondary button group">
          <Button disabled={guessed.includes("a")} onClick={() => checkGuess("a")}>A</Button>
          <Button disabled={guessed.includes("s")} onClick={() => checkGuess("s")}>S</Button>
          <Button disabled={guessed.includes("d")} onClick={() => checkGuess("d")}>D</Button>
          <Button disabled={guessed.includes("f")} onClick={() => checkGuess("f")}>F</Button>
          <Button disabled={guessed.includes("g")} onClick={() => checkGuess("g")}>G</Button>
          <Button disabled={guessed.includes("h")} onClick={() => checkGuess("h")}>H</Button>
          <Button disabled={guessed.includes("j")} onClick={() => checkGuess("j")}>J</Button>
          <Button disabled={guessed.includes("k")} onClick={() => checkGuess("k")}>K</Button>
          <Button disabled={guessed.includes("l")} onClick={() => checkGuess("l")}>L</Button>
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="outlined secondary button group">
          <Button disabled={guessed.includes("z")} onClick={() => checkGuess("z")}>Z</Button>
          <Button disabled={guessed.includes("x")} onClick={() => checkGuess("x")}>X</Button>
          <Button disabled={guessed.includes("c")} onClick={() => checkGuess("c")}>C</Button>
          <Button disabled={guessed.includes("v")} onClick={() => checkGuess("v")}>V</Button>
          <Button disabled={guessed.includes("b")} onClick={() => checkGuess("b")}>B</Button>
          <Button disabled={guessed.includes("n")} onClick={() => checkGuess("n")}>N</Button>
          <Button disabled={guessed.includes("m")} onClick={() => checkGuess("m")}>M</Button>
        </ButtonGroup>
        <p>correct: {state.won}</p> */}
      {/* </div> */}
    </div>
  );
}