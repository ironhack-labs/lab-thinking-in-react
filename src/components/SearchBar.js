import React from 'react';
import { useState } from 'react';

const SearchBar = (props) => {
  const { products, setFilteredProducts } = props;
  const [query, setQuery] = useState('');
  const [checkbox, setCheckbox] = useState('off');

  const filterProducts = (newQuery, checkbox) => {
    let filteredProducts;
    if (checkbox === 'on') {
      filteredProducts = products.filter((product) => {
        return (
          product.name.toLowerCase().includes(newQuery.toLowerCase()) &&
          product.stocked
        );
      });
    } else {
      filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(newQuery.toLowerCase());
      });
    }
    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <label>Search: </label>
      <input
        type="text"
        placeholder="search here"
        onChange={(event) => {
          setQuery(event.target.value);
          filterProducts(event.target.value);
        }}
      />

      <label>Only show products on stock</label>
      <input
        type="checkbox"
        onClick={(event) => {
          setCheckbox(event.target.value);
          console.log(event.target.value);
          filterProducts(query, checkbox);
        }}
      />
    </div>
  );
};

export default SearchBar;
