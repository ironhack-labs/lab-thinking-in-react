import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsondata from './data.json';
import FilterableProductTable from './components/filterableproducttable/FilterableProductTable';
import SearchBar from './components/searchbar/SearchBar';
import ProductTable from './components/producttable/ProductTable';
import ProductRow from './components/productrow/ProductRow';

function App() {
  return (
    <div className="App">
        <FilterableProductTable products={jsondata.data}/>
    </div>
  );
}

export default App;
