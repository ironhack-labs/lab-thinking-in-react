import React from 'react';

const SearchBar = props => {
  const handleChange = event => {
    const { value } = event.target;
    console.log(value);
    props.setQuery(value);
  };

  return (
    <form>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        id="search"
        value={props.query}
        onChange={() => handleChange}
      />
      <label htmlFor="inStock">Only show products on stock</label>
      <input
        type="checkbox"
        name="inStock"
        id="inStock"
        value={props.checked}
        onChange={props.checkHandle}
      />
    </form>
  );
};

export default SearchBar;
