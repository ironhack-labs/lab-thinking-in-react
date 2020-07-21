import React from 'react';
import logo from './logo.svg';
import data from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import 'bulma/css/bulma.css';



function App() {
  
  
  return (
    <div className="App">
      
      <FilterableProductTable products= {data} />
        </div>
  );
}

export default App;
