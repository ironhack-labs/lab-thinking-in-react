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

  return (
    <div>
      <div>Search</div>
      <input type="text" onChange={handleChange} value={search} />
      <p>Only show products in stock</p>
    </div>
  );
};

export default SearchBar;
