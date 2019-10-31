import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <FilterableProductTable {...data} />
        </div>
      </div>
    );
  }
}

export default App;
