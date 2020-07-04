import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const QUOTES = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

class App extends Component {
  state = {
    quotes: [],
  }

  componentDidMount() {
    fetch(QUOTES).then(el => el.json())
    .then(el => {
      this.setState({
        quotes: el.quotes
      });
    })
  }

  render (){
    let { quotes } = this.state;
    let index =  Math.floor(Math.random() * quotes.length);
    let quote = quotes[index];
    console.log(quote);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <img src={logo} className="App-logo" alt="logo" />
            FCC: Random Quote Machine
          </p>
        </header>

        <div className="wrapper">
          <div className="col-6 box p-5 rounded">
              {
                quote && (
                  <div>
                    <p>{quote.quote}</p>
                    <p>-{quote.author}</p>
                  </div>
                )
              }
            <div className="d-flex justify-content-between">
              <a className="btn btn-primary" href="/">Tweet</a>
              <button className="btn btn-primary">Get Quote</button>
            </div>
            
          </div>
          
        </div>
      </div>
    );
  }

  
}



export default App;
