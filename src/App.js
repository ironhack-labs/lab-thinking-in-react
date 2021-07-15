import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import ProductTable from './components/ProductTable';
import productData from './data.json'
import './App.css';

function App() {
  
  const [ products, setProducts ] = useState(productData.data);
  const [ filteredProducts, setFilteredProducts ] = useState(productData.data);
  const [ searchText, setSearchText ] = useState('');
  const [ displayStock, setDisplayStock ] = useState(true);

  useEffect (() => {
    filterProducts();
  }, [displayStock, searchText]) 

  const handleSearch = event => {
    const searchText = event.target.value.toLowerCase();
    setSearchText(searchText);
  }
  
  const handleDisplayStock = event => {
    const displayStock = event.target.checked;
    setDisplayStock(displayStock);
  }
  
  const filterProducts = () => {
    let newFilteredProducts = products;
    if (displayStock === false) {
      newFilteredProducts = products.filter(product => product.stocked);
    }
    newFilteredProducts = newFilteredProducts.filter(product => product.name.toLowerCase().includes(searchText));
    setFilteredProducts(newFilteredProducts);
  }

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center"}}>IronStore</h1>
      <Searchbar onSearch={handleSearch} onDisplayStock={handleDisplayStock} />
      <ProductTable products={filteredProducts}/>
    </div>
  );
}

export default App;
