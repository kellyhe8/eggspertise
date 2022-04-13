import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: "20px"
//     // '& > *': {
//     //   margin: theme.spacing(1),
//     // },
//   },
// }));


class LetterInput extends React.Component {
  // https://www.digitalocean.com/community/tutorials/how-to-manage-state-on-react-class-components
  state = {
    input: "", // the current input
    guesses: [], // keep track of everything they've guesses
    won: false, // set to true if they get it right, then reset?
    points: 0
  }

  checkGuess = (guess) => {
    this.setState(state => ({
      input: guess,
      guesses: [...state.guesses, guess],
      // if they just won or they already won
      won: this.props.answer === guess || state.won,
      // if they got it wrong, -1 point
      points: this.props.answer === guess ? state.points += 1 : state.points
    }))
    // console.log("guessed", guess, this.state.guesses, this.state.won)
  }

  reset = () => {
    // if they're skipping, remove a point
    if (!this.state.won) {
      this.setState(state => ({
        points: state.points -= 1
      }))
    }
    this.setState({
      input: "",
      guesses: [],
      won: false
    })
    this.props.nextLetter();
  }

  render() {
    return (
      <div className='letterinput'>
        <p>score: {this.state.points}</p>
        <ButtonGroup color="secondary" aria-label="outlined secondary button group">
          <Button disabled={this.state.guesses.includes("q")} onClick={() => this.checkGuess("q")}>Q</Button>
          <Button disabled={this.state.guesses.includes("w")} onClick={() => this.checkGuess("w")}>W</Button>
          <Button disabled={this.state.guesses.includes("e")} onClick={() => this.checkGuess("e")}>E</Button>
          <Button disabled={this.state.guesses.includes("r")} onClick={() => this.checkGuess("r")}>R</Button>
          <Button disabled={this.state.guesses.includes("t")} onClick={() => this.checkGuess("t")}>T</Button>
          <Button disabled={this.state.guesses.includes("y")} onClick={() => this.checkGuess("y")}>Y</Button>
          <Button disabled={this.state.guesses.includes("u")} onClick={() => this.checkGuess("u")}>U</Button>
          <Button disabled={this.state.guesses.includes("i")} onClick={() => this.checkGuess("i")}>I</Button>
          <Button disabled={this.state.guesses.includes("o")} onClick={() => this.checkGuess("o")}>O</Button>
          <Button disabled={this.state.guesses.includes("p")} onClick={() => this.checkGuess("p")}>P</Button>
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="outlined secondary button group">
          <Button disabled={this.state.guesses.includes("a")} onClick={() => this.checkGuess("a")}>A</Button>
          <Button disabled={this.state.guesses.includes("s")} onClick={() => this.checkGuess("s")}>S</Button>
          <Button disabled={this.state.guesses.includes("d")} onClick={() => this.checkGuess("d")}>D</Button>
          <Button disabled={this.state.guesses.includes("f")} onClick={() => this.checkGuess("f")}>F</Button>
          <Button disabled={this.state.guesses.includes("g")} onClick={() => this.checkGuess("g")}>G</Button>
          <Button disabled={this.state.guesses.includes("h")} onClick={() => this.checkGuess("h")}>H</Button>
          <Button disabled={this.state.guesses.includes("j")} onClick={() => this.checkGuess("j")}>J</Button>
          <Button disabled={this.state.guesses.includes("k")} onClick={() => this.checkGuess("k")}>K</Button>
          <Button disabled={this.state.guesses.includes("l")} onClick={() => this.checkGuess("l")}>L</Button>
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="outlined secondary button group">
          <Button disabled={this.state.guesses.includes("z")} onClick={() => this.checkGuess("z")}>Z</Button>
          <Button disabled={this.state.guesses.includes("x")} onClick={() => this.checkGuess("x")}>X</Button>
          <Button disabled={this.state.guesses.includes("c")} onClick={() => this.checkGuess("c")}>C</Button>
          <Button disabled={this.state.guesses.includes("v")} onClick={() => this.checkGuess("v")}>V</Button>
          <Button disabled={this.state.guesses.includes("b")} onClick={() => this.checkGuess("b")}>B</Button>
          <Button disabled={this.state.guesses.includes("n")} onClick={() => this.checkGuess("n")}>N</Button>
          <Button disabled={this.state.guesses.includes("m")} onClick={() => this.checkGuess("m")}>M</Button>
        </ButtonGroup>
        <p>{this.state.input ? `you just guessed "${this.state.input}". it was ${this.state.won ? "correct. +1 point for you" : "wrong try again."}.` : "select an answer."} </p>
        <div>
          <Button disabled={!this.state.won} onClick={() => this.reset()} variant="outlined">next</Button>
          <Button disabled={this.state.won} onClick={() => this.reset()} variant="outlined">skip</Button>
        </div>
      </div>
    );
  }
}

export default LetterInput
