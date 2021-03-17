import React from 'react';
import logo from './logo.svg';
import './App.css';
import dataJson from "./data.json"
import FilterableProductTable from "./Components/FilterableProductTable";
import SearchBar from "./Components/SearchBar";
import ProductTable from "./Components/SearchBar";
import ProductRow from "./Components/ProductRow";

function App() {
  return (
    <div className="App">
     <FilterableProductTable products={ dataJson.data } />
    </div>
  );
}

export default App;
