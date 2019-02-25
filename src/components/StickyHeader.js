import React from 'react';
import ArticleNavigator from './ArticleNavigator';
import './styles/StickyHeader.css';

const StickyHeader = ({handleArticleNav, currentArticle, amountOfArticles}) => {
  return (
    <header className="Header" aria-label="Peachey News">
      <p>Peachey News</p>
      <ArticleNavigator handleArticleNav={handleArticleNav}
      currentArticle={currentArticle}
      amountOfArticles={amountOfArticles}
      />
    </header>
  )
}

export default StickyHeader;
