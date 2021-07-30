import React from 'react';
import './App.css';
import FilterableProductTable from './Components/FilteredProductTable';
import data from './data.json'
function App() {
  return (
    <div className="App">
      <h1>IronStore</h1> 
      <FilterableProductTable products = {data.data}/>
    </div>
  );
}

export default App;
