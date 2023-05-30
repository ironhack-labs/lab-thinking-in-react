// App.js
import './App.css';
import React from 'react';
import ProductsPage from "./components/ProductsPage";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";



function App() {
  return (
    <div className="App">
      <ProductsPage/>
      <ProductTable/>
      <SearchBar/>
    </div>
  );
}

export default App;