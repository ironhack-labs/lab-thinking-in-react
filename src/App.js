import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from '../src/data.json';
let storeData = data.data;

function App() {
  return (
    <div className="App">
      <FilterableProductTable storeData={storeData} />
    </div>
  );
}

export default App;
