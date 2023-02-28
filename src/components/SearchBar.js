import React from "react";

function SearchBar({ searchText, inStockOnly, onSearchInputChange, onInStockInputChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={onSearchInputChange}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={onInStockInputChange}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
