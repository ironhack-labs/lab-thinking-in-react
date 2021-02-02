import React from 'react';
import productData from './data.json'
import './App.css';
import FilterableProductTable from './components/filterableproducttable/FilterableProductTable'

function App() {
  return (
    <div className="App">
        <FilterableProductTable products={productData['data']}/>
    </div>
  );
}

export default App;
