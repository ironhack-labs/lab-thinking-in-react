import React from 'react';

import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div>
      <h1 className="searchbar-wrapper">Iron Store</h1>
      <FilterableProductTable></FilterableProductTable>
    </div>
  );
}

export default App;
