import React, { useState } from "react";
import './App.css';
import jsonData from "./data.json";
import ProductTable from './components/product-table/ProductTable';
import SearchBar from "./components/search-bar/SearchBar";

const App = () => {
  const [products, setProducts] = useState(jsonData);
  
  return (
    <div className="App">
      <h1>IronStore</h1>
      <SearchBar jsonData={jsonData} setProducts={setProducts} />
      <ProductTable products={[...products]} />
    </div>
  );
};

export default App;