import React from 'react';

const SearchBar = ({ getKeyword, getStock }) => {
  return (
    <React.Fragment>
      <div>
        <label htmlFor="search">Search</label>
        <input id="search" onChange={getKeyword} type="text" />
      </div>
      <div>
        <label htmlFor="inStock">Show only products in stock</label>
        <input type="checkbox" id="inStock" name="stocked" onClick={getStock}/>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
