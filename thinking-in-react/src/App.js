import React, { Component } from 'react';


import './App.css';
import FilteableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteableProductTable />
      </div>
    );
  }
}

export default App;
