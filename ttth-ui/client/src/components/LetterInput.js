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
  }

  checkGuess = (guess) => {
    this.setState(state => ({
      input: guess,
      guesses: [...state.guesses, guess],
      won: this.props.answer == guess
    }))
    console.log("guessed", guess, this.state.guesses, this.state.won)
  }

  reset = () => {
    this.setState({
      input: "",
      guesses: [],
    })
  }

  render() {
    return (
      <div className='letterinput'>
        <p>(answer is {this.props.answer})</p>
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
        <p>you just guessed "{this.state.input}". it was {this.state.won.toString()}</p>
      </div>
    );
  }
}

export default LetterInput

// export default function LetterInput(props) {
//   // const classes = useStyles();
//   let answer = this.props.answer
//   console.log("ANSWER", answer)

//   return (
//     <div className={classes.root}>
//       <p>answer</p>
//       <ButtonGroup color="secondary" aria-label="outlined secondary button group">
//         <Button>Q</Button>
//         <Button>W</Button>
//         <Button>E</Button>
//         <Button>R</Button>
//         <Button>T</Button>
//         <Button>Y</Button>
//         <Button>U</Button>
//         <Button>I</Button>
//         <Button>O</Button>
//         <Button>P</Button>
//       </ButtonGroup>
//       <ButtonGroup color="secondary" aria-label="outlined secondary button group">
//         <Button>A</Button>
//         <Button>S</Button>
//         <Button>D</Button>
//         <Button>F</Button>
//         <Button>G</Button>
//         <Button>H</Button>
//         <Button>J</Button>
//         <Button>K</Button>
//         <Button>L</Button>
//       </ButtonGroup>
//       <ButtonGroup color="secondary" aria-label="outlined secondary button group">
//         <Button>Z</Button>
//         <Button>X</Button>
//         <Button>C</Button>
//         <Button>V</Button>
//         <Button>V</Button>
//         <Button>B</Button>
//         <Button>N</Button>
//         <Button>M</Button>
//       </ButtonGroup>
//     </div>
//   );
// }