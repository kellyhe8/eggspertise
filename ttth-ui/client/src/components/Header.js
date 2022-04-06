import React from 'react';
import logo from '../logo.svg';


export default function Header() {

  return (
    <div className="row">
      <img src={logo} className="App-logo" alt="logo" /> 
      <h2>Talk to the Hand</h2>
    </div>
  );
}