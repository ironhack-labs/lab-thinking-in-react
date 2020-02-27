import React, { Component } from 'react';

import './App.css';

import ProductTable from './components/ProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1 className="title">IronStore</h1>
        </div>
        <div className="centered">
          <ProductTable />
        </div>
      </div>
    );
  }
}
export default App;
