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
          <Button disabled={this.props.guesses.includes("Q")} onClick={() => this.props.checkGuess("Q")}>Q</Button>
          <Button disabled={this.props.guesses.includes("W")} onClick={() => this.props.checkGuess("W")}>W</Button>
          <Button disabled={this.props.guesses.includes("E")} onClick={() => this.props.checkGuess("E")}>E</Button>
          <Button disabled={this.props.guesses.includes("R")} onClick={() => this.props.checkGuess("R")}>R</Button>
          <Button disabled={this.props.guesses.includes("T")} onClick={() => this.props.checkGuess("T")}>T</Button>
          <Button disabled={this.props.guesses.includes("Y")} onClick={() => this.props.checkGuess("Y")}>Y</Button>
          <Button disabled={this.props.guesses.includes("U")} onClick={() => this.props.checkGuess("U")}>U</Button>
          <Button disabled={this.props.guesses.includes("I")} onClick={() => this.props.checkGuess("I")}>I</Button>
          <Button disabled={this.props.guesses.includes("O")} onClick={() => this.props.checkGuess("O")}>O</Button>
          <Button disabled={this.props.guesses.includes("P")} onClick={() => this.props.checkGuess("P")}>P</Button>
        </ButtonGroup>
        <ButtonGroup disableElevation  color="secondary" variant="contained" size="large" aria-label="outlined button group">
          <Button disabled={this.props.guesses.includes("A")} onClick={() => this.props.checkGuess("A")}>A</Button>
          <Button disabled={this.props.guesses.includes("S")} onClick={() => this.props.checkGuess("S")}>S</Button>
          <Button disabled={this.props.guesses.includes("D")} onClick={() => this.props.checkGuess("D")}>D</Button>
          <Button disabled={this.props.guesses.includes("F")} onClick={() => this.props.checkGuess("F")}>F</Button>
          <Button disabled={this.props.guesses.includes("G")} onClick={() => this.props.checkGuess("G")}>G</Button>
          <Button disabled={this.props.guesses.includes("H")} onClick={() => this.props.checkGuess("H")}>H</Button>
          <Button disabled={this.props.guesses.includes("J")} onClick={() => this.props.checkGuess("J")}>J</Button>
          <Button disabled={this.props.guesses.includes("K")} onClick={() => this.props.checkGuess("K")}>K</Button>
          <Button disabled={this.props.guesses.includes("L")} onClick={() => this.props.checkGuess("L")}>L</Button>
        </ButtonGroup>
        <ButtonGroup disableElevation  color="secondary" variant="contained" size="large" aria-label="outlined button group">
          <Button disabled={this.props.guesses.includes("Z")} onClick={() => this.props.checkGuess("Z")}>Z</Button>
          <Button disabled={this.props.guesses.includes("X")} onClick={() => this.props.checkGuess("X")}>X</Button>
          <Button disabled={this.props.guesses.includes("C")} onClick={() => this.props.checkGuess("C")}>C</Button>
          <Button disabled={this.props.guesses.includes("V")} onClick={() => this.props.checkGuess("V")}>V</Button>
          <Button disabled={this.props.guesses.includes("B")} onClick={() => this.props.checkGuess("B")}>B</Button>
          <Button disabled={this.props.guesses.includes("N")} onClick={() => this.props.checkGuess("N")}>N</Button>
          <Button disabled={this.props.guesses.includes("M")} onClick={() => this.props.checkGuess("M")}>M</Button>
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
