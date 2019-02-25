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
    // Maps all the fields for the current article selected from the navigator
    let articleContents = (articleData[0] !== "")
    ? articleData[currentArticle].body.map((articleItem, index) => {
      if (articleItem.type === "heading") {
        return(<Heading text={articleItem.model.text}/>)
      }
      else if (articleItem.type === "image") {
        return(<Image url={articleItem.model.url} alt={articleItem.model.altText}/>)
      }
      else if (articleItem.type === "paragraph") {
        return(<Paragraph text={articleItem.model.text}/>)
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
