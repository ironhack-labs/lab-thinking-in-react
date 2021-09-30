import React from 'react';

const SearchBar = ({ getSearchQuery }) => {
  return (
    <div>
      <h2>Search</h2>
      <input type="text" onChange={(e) => getSearchQuery(e.target.value)} />
      <div>
        <input type="checkbox" />
        <div>Only show products on stock.</div>
      </div>
    </div>
  );
};

export default SearchBar;
