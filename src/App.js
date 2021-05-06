import React from 'react';
import './App.css';
import jsondata from './data.json'
import FilterableProductsTable from './components/FilterableProductTable'
const parsedData = JSON.parse(JSON.stringify(jsondata.data));

function App() {
  return (
    <div className="App">
    <FilterableProductsTable products={parsedData}/>
    </div>
  );
}

export default App;
