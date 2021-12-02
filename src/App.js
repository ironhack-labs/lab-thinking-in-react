import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import jsondata from './data.json'
const products = {...jsondata};

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ products.data } />
    </div>
  );
}

export default App;
