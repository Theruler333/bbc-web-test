import React from 'react';
import Heading from './article-templates/Heading';
import Image from './article-templates/Image';
import Paragraph from './article-templates/Paragraph';
import List from './article-templates/List';
import './styles/Article.css';

const Article = () => {
  return (
    <article>
      <h1>I am the Article Component</h1>
      <Heading/>
      <Image/>
      <Paragraph/>
      <List/>
    </article>
  )
}

export default Article;
