import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

class LetterInput extends React.Component {

  render() {
    const row1 = "QWERTYUIOP".split("");
    const row2 = "ASDFGHJKL".split("");
    const row3 = "ZXCVBNM".split("");
    return (
      <div className="letterinput" >
        <ButtonGroup disableElevation  color="secondary" variant="contained" size="large" aria-label="outlined button group">
          {row1.map((l,_) => {
            return <Button key={l} disabled={this.props.guesses.includes(l) || this.props.won || (l !== this.props.answer && this.props.showAnswer)} onClick={() => this.props.checkGuess(l)}>{l}</Button>
          })}
        </ButtonGroup>
        <ButtonGroup disableElevation  color="secondary" variant="contained" size="large" aria-label="outlined button group">
          {row2.map((l,_) => {
            // console.log(l != this.props.answer && this.props.showAnswer, l, this.props.answer);
            return <Button key={l} disabled={this.props.guesses.includes(l) || this.props.won || (l !== this.props.answer && this.props.showAnswer)} onClick={() => this.props.checkGuess(l)}>{l}</Button>
          })}
        </ButtonGroup>
        <ButtonGroup disableElevation  color="secondary" variant="contained" size="large" aria-label="outlined button group">
          {row3.map((l,_) => {
            return <Button key={l} disabled={this.props.guesses.includes(l) || this.props.won || (l !== this.props.answer && this.props.showAnswer)} onClick={() => this.props.checkGuess(l)}>{l}</Button>
          })}
        </ButtonGroup>
        <div className="control-buttons">
          <Button disabled={this.props.won || this.props.showAnswer} onClick={() => {
            // this.props.reset();
            this.props.setShowAnswerTrue();
          }} variant="contained" size="small">view answer</Button>
          <Button size="small" disabled={this.props.won || this.props.showAnswer} onClick={() => this.props.reset()} variant="contained">skip</Button>
          <Button size="small" disabled={!this.props.won && !this.props.showAnswer} onClick={() => this.props.reset()} variant="contained">next</Button>
        </div>
      </div>
    );
  }
}

export default LetterInput
