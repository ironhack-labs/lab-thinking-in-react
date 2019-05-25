import React, { Component } from 'react';
import data from './data.json'
import Filterable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filterable products={ data } />
      </div>
    );
  }
}

export default App;