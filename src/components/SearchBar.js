import React from 'react';
import { useState } from 'react';

export const SearchBar = (props) => {
  const [query, setQuery] = useState('');

  const handleFilter = (e) => {
    setQuery(e.target.value);
    props.filterItems(e.target.value);
  };

  const handleStock = (e) => {
    // if (e.target.value === checked) console.log(e.target.value);
    // setQuery(e.target.value);
    // props.filterItems(e.target.value);
  };

  return (
    <div>
      <div>
        <label for="searchbar"></label>
        <input
          style={{ width: '90%' }}
          type="text"
          id="searchbar"
          value={query}
          onChange={handleFilter}
        />
      </div>

      <div>
        <label for="inStock">In stock</label>
        <input type="checkbox" onChange={handleStock} checked />
      </div>
    </div>
  );
};
