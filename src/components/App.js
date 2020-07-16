import React from 'react';
import './App.css';
import Searchbar from './Searchbar/Searchbar'
import ProductTable from './ProductTable/ProductTable';

function App() {
  return (
    <div className="App">
      <h1>Ironstore</h1>
      <Searchbar />
      <ProductTable />
    </div>
  );
}

export default App;
