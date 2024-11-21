import React from "react";

function SearchBar({ onSearch }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="container my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar productos..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;

