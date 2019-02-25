import React from 'react';
import ArticleNavigator from './ArticleNavigator';
import logo from './logo.svg';
import './styles/StickyHeader.css';

const StickyHeader = ({handleArticleNav, currentArticle, amountOfArticles}) => {
  return (
    <header className="Header" aria-label="Peachey News">
      <img src={logo} className="App-logo" alt="logo" />
      <ArticleNavigator handleArticleNav={handleArticleNav}
      currentArticle={currentArticle}
      amountOfArticles={amountOfArticles}
      />
    </header>
  )
}

export default StickyHeader;
