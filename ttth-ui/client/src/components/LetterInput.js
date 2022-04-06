import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
  },
}));

export default function LetterInput() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="secondary" aria-label="outlined secondary button group">
        <Button>Q</Button>
        <Button>W</Button>
        <Button>E</Button>
        <Button>R</Button>
        <Button>T</Button>
        <Button>Y</Button>
        <Button>U</Button>
        <Button>I</Button>
        <Button>O</Button>
        <Button>P</Button>
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="outlined secondary button group">
        <Button>A</Button>
        <Button>S</Button>
        <Button>D</Button>
        <Button>F</Button>
        <Button>G</Button>
        <Button>H</Button>
        <Button>J</Button>
        <Button>K</Button>
        <Button>L</Button>
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="outlined secondary button group">
        <Button>Z</Button>
        <Button>X</Button>
        <Button>C</Button>
        <Button>V</Button>
        <Button>V</Button>
        <Button>B</Button>
        <Button>N</Button>
        <Button>M</Button>
      </ButtonGroup>
    </div>
  );
}