import React from 'react';
import './App.css';
import jsondata from './data.json'
import SearchBar from './Components/SearchBar'
import ProductTable from './Components/ProductTable '
import ProductRow from './Components/ProductRow '

import FilterableProductTable from './Components/FilterableProductTable';


function App() {
  return (
    <div className="App">
      <FilterableProductTable products={jsondata.data} />
    </div>
  );
}

export default App;