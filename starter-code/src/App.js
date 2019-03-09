import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './components/FilterProductTable'
//import data from "./data.json"

import Row from './components/ProductRow';
import Search from './components/SearchBar';

class App extends Component {

  state = {
    termino: ''
  }

  recibirInfo = word => {
    this.setState({termino: word})
  }

  render() {
    return (
      <div className="App">
        <Search recibirInfoFunc={this.recibirInfo} />
        <Row word={this.state.termino} />
      </div>
    );
  }
}

export default App;
