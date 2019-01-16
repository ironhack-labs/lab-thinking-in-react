import React, { Component } from 'react';
import './index.sass';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="app">
        <FilterableProductTable/>
      </div>
    );
  }
}

export default App;
