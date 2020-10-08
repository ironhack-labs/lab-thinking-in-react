import React from 'react';
import products from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';


function App() {
  return (
    <div>
<h1>IronStore</h1>
    <FilterableProductTable data={products} />
</div>
  )
}

export default App;
