import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <FilterableProductTable products={data} />
      </div>
    );
  }
}

export default App;
