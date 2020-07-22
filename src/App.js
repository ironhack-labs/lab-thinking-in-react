import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable'
import data from './data.json'


function App() {
  return (
    <div className="App">
      <FilterableProductTable products = {data.data} />
    </div>
  );
}

export default App;
