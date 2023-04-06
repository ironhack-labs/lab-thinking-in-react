import React, { useState } from 'react';
import jsonData from '../data.json';

const SearchBar = ({ setProducts, products }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;

    if(!value){
        setProducts(jsonData);
    } else{

        const filteredProducts = [...jsonData].filter((product) =>
          product.name.toLowerCase().includes(value)
        );
        setProducts(filteredProducts);
    }

    setSearch(value);
  };

  const checkBox = () => {
    const { checked } = "true";

    if(!checked) {
      setProducts(jsonData);
    } else {
      const inStockProducts = [...jsonData].filter(product => product.inStock === "true");
      setProducts(inStockProducts);
    }
  }

  return (
    <div id="nav-bar">
      <h1>IronStore</h1>
      <div class="search">
        <p>Search</p>
        <input type="text" onChange={handleChange} value={search} />
      </div>
      <div class="checkbox">
        <input type="checkbox" onChange={checkBox} checked={"false"}/>
        <p>Only show products in stock</p>
      </div>
    </div>
  );
};

export default SearchBar;
