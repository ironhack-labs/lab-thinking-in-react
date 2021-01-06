// -- App.js --

import React from 'react';
import data from './data.json'
import './App.css';

import FilterableProductTable from './components/FilterableProductTable';


function App() {

  // console.log("here")

  return (
    <div className="App">
      <FilterableProductTable products={ data } />
    </div>
  );
}

export default App;
