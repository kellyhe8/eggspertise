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
  // state = {
  //   input: "", // the current input
  //   guesses: [], // keep track of everything they've guesses
  //   won: false, // set to true if they get it right, then reset?
  //   score: 0
  // }

  // checkGuess = (guess) => {
  //   this.setState(state => ({
  //     input: guess,
  //     guesses: [...state.guesses, guess],
  //     // if they just won or they already won
  //     won: this.props.answer === guess || state.won,
  //     // if they got it wrong, -1 point
  //     score: this.props.answer === guess ? state.score += 1 : state.score
  //   }))
  //   // console.log("guessed", guess, this.state.guesses, this.state.won)
  // }

  // reset = () => {
  //   // if they're skipping, remove a point
  //   if (!this.state.won) {
  //     this.setState(state => ({
  //       score: state.score -= 1
  //     }))
  //   }
  //   this.setState({
  //     input: "",
  //     guesses: [],
  //     won: false
  //   })
  //   this.props.nextLetter();
  // }

  render() {
    return (
      <div className="letterinput" >
        <ButtonGroup disableElevation  color="secondary"  variant="contained" size="large" aria-label="outlined button group">
          <Button disabled={this.props.guesses.includes("q")} onClick={() => this.props.checkGuess("q")}>Q</Button>
          <Button disabled={this.props.guesses.includes("w")} onClick={() => this.props.checkGuess("w")}>W</Button>
          <Button disabled={this.props.guesses.includes("e")} onClick={() => this.props.checkGuess("e")}>E</Button>
          <Button disabled={this.props.guesses.includes("r")} onClick={() => this.props.checkGuess("r")}>R</Button>
          <Button disabled={this.props.guesses.includes("t")} onClick={() => this.props.checkGuess("t")}>T</Button>
          <Button disabled={this.props.guesses.includes("y")} onClick={() => this.props.checkGuess("y")}>Y</Button>
          <Button disabled={this.props.guesses.includes("u")} onClick={() => this.props.checkGuess("u")}>U</Button>
          <Button disabled={this.props.guesses.includes("i")} onClick={() => this.props.checkGuess("i")}>I</Button>
          <Button disabled={this.props.guesses.includes("o")} onClick={() => this.props.checkGuess("o")}>O</Button>
          <Button disabled={this.props.guesses.includes("p")} onClick={() => this.props.checkGuess("p")}>P</Button>
        </ButtonGroup>
        <ButtonGroup disableElevation  color="secondary" variant="contained" size="large" aria-label="outlined button group">
          <Button disabled={this.props.guesses.includes("a")} onClick={() => this.props.checkGuess("a")}>A</Button>
          <Button disabled={this.props.guesses.includes("s")} onClick={() => this.props.checkGuess("s")}>S</Button>
          <Button disabled={this.props.guesses.includes("d")} onClick={() => this.props.checkGuess("d")}>D</Button>
          <Button disabled={this.props.guesses.includes("f")} onClick={() => this.props.checkGuess("f")}>F</Button>
          <Button disabled={this.props.guesses.includes("g")} onClick={() => this.props.checkGuess("g")}>G</Button>
          <Button disabled={this.props.guesses.includes("h")} onClick={() => this.props.checkGuess("h")}>H</Button>
          <Button disabled={this.props.guesses.includes("j")} onClick={() => this.props.checkGuess("j")}>J</Button>
          <Button disabled={this.props.guesses.includes("k")} onClick={() => this.props.checkGuess("k")}>K</Button>
          <Button disabled={this.props.guesses.includes("l")} onClick={() => this.props.checkGuess("l")}>L</Button>
        </ButtonGroup>
        <ButtonGroup disableElevation  color="secondary" variant="contained" size="large" aria-label="outlined button group">
          <Button disabled={this.props.guesses.includes("z")} onClick={() => this.props.checkGuess("z")}>Z</Button>
          <Button disabled={this.props.guesses.includes("x")} onClick={() => this.props.checkGuess("x")}>X</Button>
          <Button disabled={this.props.guesses.includes("c")} onClick={() => this.props.checkGuess("c")}>C</Button>
          <Button disabled={this.props.guesses.includes("v")} onClick={() => this.props.checkGuess("v")}>V</Button>
          <Button disabled={this.props.guesses.includes("b")} onClick={() => this.props.checkGuess("b")}>B</Button>
          <Button disabled={this.props.guesses.includes("n")} onClick={() => this.props.checkGuess("n")}>N</Button>
          <Button disabled={this.props.guesses.includes("m")} onClick={() => this.props.checkGuess("m")}>M</Button>
        </ButtonGroup>
        <div className="control-buttons">
          <Button disabled={!this.props.won} onClick={() => this.props.reset()} variant="contained">next</Button>
          <Button disabled={this.props.won} onClick={() => this.props.reset()} variant="contained">skip</Button>
        </div>
      </div>
    );
  }
}

export default LetterInput
