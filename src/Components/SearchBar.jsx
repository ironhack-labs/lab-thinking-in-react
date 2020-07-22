import React from 'react';

const SearchBar = ({ callback }) => {
  return (
    <div className="SearchBar flex col">
      <p className="title">Search</p>
      <input onChange={callback} type="text" id="search-bar" name="name" />
      <div className="check-stock">
        <input onChange={callback} type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="checkbox-label">
          Only show products on stock
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
