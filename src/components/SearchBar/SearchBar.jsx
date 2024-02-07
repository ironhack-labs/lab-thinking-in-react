import React, { useState } from "react";

function SearchBar({ onSearch, showInStockOnly, onToggleInStock }) {
  const [search, setSearch] = useState("");
  const [letsShowInStockOnly, setLetInStockOnly] = useState(showInStockOnly);

  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    onSearch(newSearch, letsShowInStockOnly);
  };

  const handleCheckboxChange = () => {
    const updatedShowInStockOnly = !letsShowInStockOnly;
    setLetInStockOnly(updatedShowInStockOnly);
    onToggleInStock(updatedShowInStockOnly);
    // Actualiza la búsqueda después de cambiar el estado del checkbox
    onSearch(search, updatedShowInStockOnly);
  };

  return (
    <div>
      <h3>Search our Stock</h3>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <label htmlFor="checkbox">Only show products in our stock</label>
      <input
        type="checkbox"
        id="checkbox"
        checked={letsShowInStockOnly}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default SearchBar;
