import React, { Component } from 'react';
import StickyHeader from './StickyHeader';
import Article from './Article';
import Ranker from './Ranker';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleData: [],
      articleURLS: [
        "https://github.com/bbc/news-coding-test-dataset/blob/master/data/article-1.json",
        "https://github.com/bbc/news-coding-test-dataset/blob/master/data/article-2.json",
        "https://github.com/bbc/news-coding-test-dataset/blob/master/data/article-3.json",
        "https://github.com/bbc/news-coding-test-dataset/blob/master/data/article-4.json",
        "https://github.com/bbc/news-coding-test-dataset/blob/master/data/article-5.json"
      ],
      randomArticleUrls: []
    };
  }

  componentDidMount() {
    for (var i = 0; i < (this.state.randomArticleUrls.length+this.state.articleURLS.length); i++) {
      this.state.randomArticleUrls.push(
        this.state.articleURLS.splice((Math.random()*this.state.articleURLS.length),1)
      );
    }
  }

  render() {
    return (
      <div className="App">
        <StickyHeader/>
        <Article/>
        <Ranker/>
      </div>
    );
  }
}

export default App;
