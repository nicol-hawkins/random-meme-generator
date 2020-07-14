import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import MemeMaker from './components/MemeMaker/MemeMaker';

class App extends Component {
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
