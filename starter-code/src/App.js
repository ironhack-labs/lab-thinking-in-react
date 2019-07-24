import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'
import MotherComponent from './Components/FilterableProductTable'
class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="body">
       <MotherComponent products={ data } />
       </div>
      </div>
    );
  }
}

export default App;
