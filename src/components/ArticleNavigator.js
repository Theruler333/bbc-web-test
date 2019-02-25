import React from 'react';
import './styles/ArticleNavigator.css';

const ArticleNavigator = ({handleArticleNav, currentArticle, amountOfArticles}) => {
  if (currentArticle === 0) {
    return (
      <nav>
        <button onClick={() => handleArticleNav(1)}>Next</button>
      </nav>
    )
  }
  else if (currentArticle === amountOfArticles-1) {
    return (
      <nav>
        <button onClick={() => handleArticleNav(-1)}>Prev</button>
      </nav>
    )
  }
  else {
    return(
      <nav>
        <button onClick={() => handleArticleNav(-1)}>Prev</button>
        <button onClick={() => handleArticleNav(1)}>Next</button>
      </nav>
    )
  }
}

export default ArticleNavigator;
