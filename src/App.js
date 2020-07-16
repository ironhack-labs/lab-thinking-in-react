import React from 'react';
import data from './data.json'; 
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  const {data:products} = data
return (
  <div className="App">
    <FilterableProductTable products={products} />
  </div>
);
}

export default App;
