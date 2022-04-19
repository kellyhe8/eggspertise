import React from 'react';
import Button from '@mui/material/Button';

// import homepageImg from "../images/homepage_img.png"
import {ImagesByLetter} from "./LettersImages"

class HintFeature extends React.Component {

  render() {
    return (
      <>
          <Button sx={{mt: "10px"}} color="secondary" variant="contained" 
            onClick={() => this.props.toggleHint()}>Hint</Button> 
          {/* <br/> */}
          {this.props.toggled && <img src={ImagesByLetter[`${this.props.answer}`][Math.floor(Math.random() * ImagesByLetter[`${this.props.answer}`].length)]}
            alt="alphabet-cheat-sheet" 
            width="200" 
            >
          </img>}
      </>
    );
  }
}

export default HintFeature
