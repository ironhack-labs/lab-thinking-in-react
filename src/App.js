import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsondata from './data.json';
import FilterableProductTable from './components/filterableproducttable/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <h1>Goods</h1>
      <FilterableProductTable products={jsondata.data} />
    </div>
  );
}

export default App;
