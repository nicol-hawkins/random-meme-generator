import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import MemeMaker from './components/MemeMaker/MemeMaker';

class App extends Component {

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://ronreiter-meme-generator.p.rapidapi.com/meme?font=Impact&font_size=50&meme=Condescending-Wonka&top=Top%20text&bottom=Bottom%20text",
      {
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
        <Header/>
        <MemeMaker/>        
      </div>
    );
  }
}

export default App;
