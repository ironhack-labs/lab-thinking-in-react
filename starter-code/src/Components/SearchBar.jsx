import React from 'react';

export default function SearchBar({
  handleInputChange,
  searchFieldValue,
  isOnStockFilter
}) {
  return (
    <div>
      <label>
        Search
        <br />
        <input
          type="search"
          name="searchField"
          value={searchFieldValue}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <br />
        <input
          type="checkbox"
          name="isOnStockFilter"
          value={isOnStockFilter}
          onChange={handleInputChange}
        />
        only show products on stock
      </label>
      <hr />
    </div>
  );
}
