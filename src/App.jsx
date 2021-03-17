import React from 'react';
import jsondata from './data.json'
import './App.css';
import FilterableProductTable from "./Components/FilterableProductTable";
import ProductRow from "./Components/ProductRow";
import ProductTable from "./Components/ProductTable";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    
<div className="App">
      <FilterableProductTable products={ jsondata.data } />
    </div>



  );
}

export default App;
