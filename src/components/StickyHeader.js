import React from 'react';
import logo from './logo.svg';
import './styles/StickyHeader.css';

const StickyHeader = () => {
  return (
    <header className="App-header" aria-label="Peachey News">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  )
}

export default StickyHeader;
