import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {

  constructor(){
    super()
    this.state = { data }
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        <h1 className="title">IronStore</h1>
        <FilterableProductTable products={ data } />
      </div>
    );
  }
}

export default App;
