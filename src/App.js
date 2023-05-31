// App.js
import './App.css';
import React from 'react';
import ProductsPage from "./components/ProductsPage";
import ProductTable from "./components/ProductTable";
import SearchBar from './components/SearchBar';
import { useState } from 'react';




function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
    
      <ProductsPage search={search}  setSearch={setSearch}/>
      <ProductTable/>
      
    </div>
  );
}

export default App;