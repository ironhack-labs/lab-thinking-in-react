import React from 'react';

function SearchBar(props) {
  const { handleSearchChange, handleStockChange, inStockOnly } = props;


  return (
    <div className="search-bar">
      <p> Search </p>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleStockChange}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;