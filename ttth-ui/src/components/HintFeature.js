import React from 'react';
import Button from '@mui/material/Button';

// import homepageImg from "../images/homepage_img.png"
import {ImagesByLetter} from "./LettersImages"

class HintFeature extends React.Component {

  render() {
    return (
      <div className="row" style={{minWidth: "200px"}}>
        <Button sx={{mb: "10px"}} color="secondary" variant="outlined" 
          onClick={() => this.props.toggleHint()}>Hint</Button> 
        {this.props.toggled && <img src={ImagesByLetter[`${this.props.answer}`][Math.floor(Math.random() * ImagesByLetter[`${this.props.answer}`].length)]}
          alt="hint" 
          width="200" 
          >
        </img>}
      </div>
    );
  }
}

export default HintFeature
