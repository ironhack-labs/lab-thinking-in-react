import React from 'react';
import { useState } from 'react';

const SearchBar = (props) => {
  const { products, setFilteredProducts } = props;
  const [query, setQuery] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const filterProducts = (newQuery, checkbox) => {
    let filteredProducts;
    if (checkbox) {
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
          filterProducts(event.target.value, checkbox);
        }}
      />

      <label>Only show products on stock</label>
      <input
        type="checkbox"
        value="2"
        onClick={(event) => {
          setCheckbox(event.target.checked);
          filterProducts(query, event.target.checked);
        }}
      />
    </div>
  );
};

export default SearchBar;
