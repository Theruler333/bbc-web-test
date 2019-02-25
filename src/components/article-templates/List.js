import React from 'react';
import './../styles/article-template-styles/List.css';

const List = ({type, items}) => {
  console.log(items);
  let listContents = items.map((listItem, index) => {
    return(<li>listItem</li>)
  })
  if (type === "unordered") {
    return (
        <div>
          <ul>
            {listContents}
          </ul>
        </div>
    )
  }
  else if (type === "ordered") {
    return (
        <div>
          <ol>
            {listContents}
          </ol>
        </div>
    )
  }
}

export default List;
