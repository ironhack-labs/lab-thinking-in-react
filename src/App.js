import React from 'react';
import data from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

function App() {
  return (
    <div className="App">
     <FilterableProductTable products={ data } />
     <SearchBar/>
     <ProductTable/>
    </div>
  );
}

export default App;
