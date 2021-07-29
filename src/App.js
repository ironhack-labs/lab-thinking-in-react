import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import FilterProductTable from './components/FilterableProductTable';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterProductTable products={data} />
      </div>
    );
  }
}

export default App;
