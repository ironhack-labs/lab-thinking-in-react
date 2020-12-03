import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable.js';
import data from 'data.json'

function App() {
  return (
    <div className="App">
    <FilterableProductTable />
{/* <h1>IronStore</h1>
<SearchBar />
<ProductTable data={} /> */}
    </div>
  );
}

export default App;
