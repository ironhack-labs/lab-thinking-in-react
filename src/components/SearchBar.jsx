import React from "react";

function SearchBar({ searchTerm, onSearchChange, onStockChange, inStockOnly }) {
  return (
    <div className="m-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search for a product"
        value={searchTerm}
        onChange={onSearchChange}
      />

      <div className="form-check d-flex align-items-center justify-content-center mt-4">
        <input
          type="checkbox"
          className="form-check-input"
          checked={inStockOnly}
          onChange={onStockChange}
        />
        <label className="form-check-label ms-2">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
