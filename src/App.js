import React, { Component } from 'react';
import './App.css';
import 'tachyons'
import FilterableProductTable from './components/FilterableProductTable';

function App() {

  return (
    <div className="App">
      <FilterableProductTable/>
    </div>
  )
}

export default App;
