import React, { useState } from 'react';

function SearchBar({ onSearch, showInStockOnly, onToggleInStock }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [localShowInStockOnly, setLocalShowInStockOnly] = useState(showInStockOnly);

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm, localShowInStockOnly);
  };

  const handleCheckboxChange = () => {
    setLocalShowInStockOnly((prevShowInStockOnly) => {
      const newShowInStockOnly = !prevShowInStockOnly;
      onToggleInStock(newShowInStockOnly);
      onSearch(searchTerm, newShowInStockOnly);
      return newShowInStockOnly;
    });
  };

  return (
    <div>
      <h3>Search</h3>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="checkbox">Only show products in stock</label>
      <input
        type="checkbox"
        id="checkbox"
        checked={localShowInStockOnly}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default SearchBar;
