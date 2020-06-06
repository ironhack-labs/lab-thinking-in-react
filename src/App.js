import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import productDataObject from './data.json'

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={productDataObject.data} />
    </div>
  );
}

export default App;
