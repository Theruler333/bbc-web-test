import React, { Component } from 'react';
import StickyHeader from './StickyHeader';
import Article from './Article';
import Ranker from './Ranker';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StickyHeader/>
        <Article/>
        <Ranker/>
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
      </div>
    );
  }
}

export default App;