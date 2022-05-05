import React from 'react';
import Button from '@mui/material/Button';

// import homepageImg from "../images/homepage_img.png"

class LetterHintFeature extends React.Component {

  constructor(props) {
      super(props);
      // console.log(props);
      // console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").filter((letter) => letter !== props.answer));
      this.state = {
          letterSubset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
          hintsSeen: 0,
      }
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
  }


  getNewSubset = () => {
    const {resetHints, toggleHintReset} = this.props;

    let letterSubsetWithoutAnswer;
    if (resetHints) {
      const resetLetterSubset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      letterSubsetWithoutAnswer = this.shuffleArray(resetLetterSubset.filter((letter) => letter !== this.props.answer));
      toggleHintReset(false);
    } else {
      letterSubsetWithoutAnswer = this.shuffleArray(this.state.letterSubset.filter((letter) => letter !== this.props.answer));
    }
    const lengthOfNewSubset = letterSubsetWithoutAnswer.length/2;
    const newLetterSubset = letterSubsetWithoutAnswer.slice(0, lengthOfNewSubset);
    newLetterSubset.push(this.props.answer);
    const letterSubsetWithAnswer = this.shuffleArray(newLetterSubset);

    this.setState({letterSubset: letterSubsetWithAnswer});

  }
   onToggleHint = () => {
      const {toggleHint, toggled} = this.props;
      toggleHint();
      if (!toggled) {
        this.getNewSubset();
      }
  }



  render() {
    // console.log(this.props);

    return (
      <div className="row" style={{minWidth: "200px"}}>
        <Button sx={{mb: "10px"}} color="secondary" variant="outlined" size="small"
          onClick={this.onToggleHint}>Hint</Button> 
        {this.props.toggled && 
        <div>
          <p className="line-height-dense"> The answer is in one of these letters. Toggle hint again for smaller subset of letters.</p>
          {this.state.letterSubset}
        </div>}
      </div>
    );
  }
}

export default LetterHintFeature
