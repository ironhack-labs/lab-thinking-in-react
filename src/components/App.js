import React from 'react'
import './App.css'

import FilterableProductTable from '../components/filterableProductTable/FilterableProductTable'

import productsData from '../data.json'

function App() {
  return (
    
    <div className="App">
      <FilterableProductTable products={ productsData } />
    </div>

  );
}

export default App;
