import React from 'react';

import './App.css';
import FilterableProductTable from './components/filterableproducttable/FilterableProductTable';
import productsJson from './data.json'

function App() {
  return (
    <div >
      <FilterableProductTable products= { productsJson }/>
    </div>
  );
}

export default App;
