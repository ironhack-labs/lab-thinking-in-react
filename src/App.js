import React from 'react';
import './tailwind.css';
import jsondata from './data.json'
import FilterableProductsTable from './components/FilterableProductTable'

function App() {
  return (
    <>
      <FilterableProductsTable products={jsondata.data} />
    </>
  );
}

export default App;
