import React from 'react';
import './../styles/article-template-styles/Image.css';

const Image = ({url, alt}) => {
  return (
      <img src={url} alt={alt} />
  )
}

export default Image;
