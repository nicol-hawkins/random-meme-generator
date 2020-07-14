import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch("https://ronreiter-meme-generator.p.rapidapi.com/meme?font=Impact&font_size=50&meme=Condescending-Wonka&top=Top%20text&bottom=Bottom%20text", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com",
        "x-rapidapi-key": "SIGN-UP-FOR-KEY"
      }
  })
  .then(response => {
	  console.log(response);
  })
  .catch(err => {
	  console.log(err);
  });
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Meme Generator</h1>
          <div className="memeButtonDiv">
            <button className="memeButton">
              Click Me
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
