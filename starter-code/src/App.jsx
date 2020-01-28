//Parent Component: FilterableProductTable
import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
  }

  render() {
    //console.log("data in App ", data );

    return (
      <div className="App">
      <h1>IronStore</h1>
        <FilterableProductTable parentCallback={ data } />
      </div>
    );
  }
}

export default App;
