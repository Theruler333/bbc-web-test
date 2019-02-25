import React from 'react';
import ArticleNavigator from './ArticleNavigator';
import logo from './logo.svg';
import './styles/StickyHeader.css';

const StickyHeader = () => {
  return (
    <header className="App-header" aria-label="Peachey News">
      <img src={logo} className="App-logo" alt="logo" />
      <ArticleNavigator/>
    </header>
  )
}

export default StickyHeader;
