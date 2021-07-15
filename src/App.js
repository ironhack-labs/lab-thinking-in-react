import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js';
import ProductTable from './ProductTable.js';

function App() {
  return (
    <div className="App">
      <h1>Iron Store</h1>

      <Search />
      {/* <ProductTable /> */}
    </div>
  );
}

export default App;
