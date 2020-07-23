import React from 'react';

const SearchBar = ({ getSearch, getStock }) => {
  return (
    <React.Fragment>
      <div>
        <label htmlFor="search">Look for a product by name: </label>
        <input
          className="searchbar"
          id="search"
          onChange={getSearch}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="inStock">Currently in stock only: </label>
        <input
          className="searchbar"
          type="checkbox"
          id="inStock"
          name="stocked"
          onClick={getStock}
        />
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
