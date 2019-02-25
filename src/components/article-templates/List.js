import React from 'react';
import './../styles/article-template-styles/List.css';

const List = () => {
  return (
      <div role="placeholder">
        I am the static list template component of an article
        <ul>
          <li>Unordered list</li>
        </ul>
        <ol>
          <li>Ordered list</li>
        </ol>
      </div>
  )
}

export default List;
