import React from 'react';
import logo from './logo.svg';
import FilterableProductTable from './components/FilterableProductTable';
import jsondata from './data.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={jsondata.data} />
    </div>
  );
}

export default App;
