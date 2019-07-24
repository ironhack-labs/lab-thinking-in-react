import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Main from './components/main/Main';
import data from '../src/data.json';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Main products={ data }/>
      </div>
    );
  }
}

export default App;
