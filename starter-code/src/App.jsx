import React, { Component } from 'react';
import './App.css';
import FilterableTable from './components/FilterableTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableTable/>
      </div>
    );
  }
}

export default App;
