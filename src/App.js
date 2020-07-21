import React from 'react';
import './App.css';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  const allProducts = data.data

  return (
    <div>
      <FilterableProductTable products={allProducts} />
    </div>
  );
}

export default App;
