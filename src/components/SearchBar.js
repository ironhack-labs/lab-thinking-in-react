import React, { useState } from 'react';

const SearchBar = ({ onSearch, onStockChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearchChange = event => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm, inStockOnly);
  };

  const handleStockChange = event => {
    const newInStockOnly = event.target.checked;
    setInStockOnly(newInStockOnly);
    onStockChange(newInStockOnly);
  };

  return (
    <div className="search-bar">
      <div className="search-label">Search</div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="stock-checkbox">
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={handleStockChange}
          />
          Only show products in stock
        </label>
      </div>
    </div>
  );
};

export default SearchBar;

