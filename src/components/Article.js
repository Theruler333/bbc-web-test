import React from 'react';
import Heading from './article-templates/Heading';
import Image from './article-templates/Image';
import Paragraph from './article-templates/Paragraph';
import List from './article-templates/List';
import './styles/Article.css';

class Article extends React.Component {
  render() {
    const articleData = this.props.articleData;
    const currentArticle = this.props.currentArticle;
    console.log(articleData);
    let articleContents = (articleData[0] !== "")
    ? articleData[currentArticle].body.map((articleItem, index) => {
      if (articleItem.type === "heading") {
        return(<Heading/>)
      }
      else if (articleItem.type === "image") {
        return(<Image/>)
      }
      else if (articleItem.type === "paragraph") {
        return(<Paragraph/>)
      }
      else if (articleItem.type === "list") {
        return(<List/>)
      }
      else {
        return(<p>This isn't a supported field</p>)
      }
    })
    : null
    return (
      <article>
        <h1>{articleData === undefined ? "Data hasn't loaded yet" : articleData[currentArticle].title}</h1>
        {articleContents}
      </article>
    )
  }
}

export default Article;
