import React from 'react';
import Button from '@mui/material/Button';

import homepageImg from "../images/homepage_img.png"

class HintFeature extends React.Component {

  render() {
    return (
      <>
          <Button sx={{mt: "10px"}} color="secondary" variant="contained" 
            onClick={() => this.props.toggleHint()}>Hint</Button> 
          {/* <br/> */}
          {this.props.toggled && <img src={homepageImg}
            alt="alphabet-cheat-sheet" 
            width="500" 
            >
          </img>}
      </>
    );
  }
}

export default HintFeature
