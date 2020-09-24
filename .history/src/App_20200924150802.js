import React from 'react';
import './App.css';

import FilterableProductTable from './Components/FilterableProductTable';
import products from './data.json';

function App() {
  return (
    <div class="App">
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;
