/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm); // Llamar a la función de búsqueda con la nueva entrada
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {/* Otros elementos de búsqueda si es necesario */}
    </div>
  );
}

export default SearchBar;