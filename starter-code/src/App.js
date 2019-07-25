import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ data.data } />
      </div>
    );
  }

}

export default App;
