import React, { Component } from 'react';
import FiltereableProductTable from './components/organisms/FiltereableProductTable';
import data from './data.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FiltereableProductTable data={data}/>
      </div>
    );
  }
}

export default App;
