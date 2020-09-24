import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import products from './data.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={products} />
    </div>
  );
}
export default App;
