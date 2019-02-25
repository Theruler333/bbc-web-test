import React, { Component } from 'react';
import StickyHeader from './StickyHeader';
import Article from './Article';
import Ranker from './Ranker';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleData: [""],
      articleURLS: [
        "https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json",
        "https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json",
        "https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json",
        "https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json",
        "https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json"
      ],
      randomArticleUrls: [],
      currentArticle: 0
    };
  }

  componentDidMount() {
    // Randomises article order
    for (var i = 0; i < (this.state.randomArticleUrls.length+this.state.articleURLS.length); i++) {
      this.state.randomArticleUrls.push(
        this.state.articleURLS.splice((Math.random()*this.state.articleURLS.length),1)
      );
    }
    // Fetches article data using a promise
    Promise.all([
      fetch(this.state.randomArticleUrls[0]),
      fetch(this.state.randomArticleUrls[1]),
      fetch(this.state.randomArticleUrls[2]),
      fetch(this.state.randomArticleUrls[3]),
      fetch(this.state.randomArticleUrls[4])
    ])
    .then(([res1, res2, res3, res4, res5]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json()]))
    .then(([data1, data2, data3, data4, data5]) => {
        this.setState({articleData:[data1, data2, data3, data4, data5]});
        console.log(this.state.articleData[0].title);
    })
    .catch((error) => {
      console.log(error)
      console.log("Article source data not availible")
    });
  }

  render() {
    return (
      <div className="App">
        <StickyHeader/>
        <Article articleData={this.state.articleData} currentArticle={this.state.currentArticle}/>
      </div>
    );
  }
}

export default App;
