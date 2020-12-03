import React from 'react';

const SearchBar = (props) => {
  const { query, handleChange } = props;
  return (
    <form>
      <label>Search</label>
      <input value={query} onChange={handleChange} />
      <input type="checkbox" />
      Only show products on stock
    </form>
  );
};

export default SearchBar;
