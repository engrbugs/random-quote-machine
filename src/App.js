import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const QUOTES = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
const tweetURL = 'https://twitter.com/intent/tweet?hashtags=quotes&hashtags=freecodecamp&text='

class App extends Component {
  state = {
    quotes: [],
    index: 0
  }

  componentDidMount() {
    fetch(QUOTES).then(el => el.json())
    .then(el => {
      this.setState({
        quotes: el.quotes
      }, this.RandomizeIndex);
    })
  }

  RandomizeIndex = () => {
    const { quotes } = this.state;
    if (quotes.length > 0) {
      let index = Math.floor(Math.random() * quotes.length);
      this.setState({
        index: index
      });
      console.log(index);
    }
  }

  render (){
    const { quotes, index } = this.state;
    let quote = quotes[index];
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <img src={logo} className="App-logo" alt="logo" />
            FCC: Random Quote Machine
          </p>
        </header>

        <div id="quote-box" className="wrapper bg-dark">
          <div className="col-6 box p-5 rounded">
              {
                quote && (
                  <div id="text" className="mb-4">
                    <cite><p>{quote.quote}</p></cite>
                    <p id="author" className="d-block text-right">-{quote.author}</p>
                  </div>
                )
              }
            <div className="d-flex justify-content-between">
              <a id="tweet-quote" className="btn btn-primary"
              href={quote&&`${tweetURL}"${quote.quote}"--${quote.author} `} 
              target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Tweet</a>
              <button id="new-quote" className="btn btn-primary" onClick={this.RandomizeIndex}>New Quote</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  
}



export default App;
