/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {  //evento de cambio//
    const newSearchTerm = e.target.value; // extraer el valor del cambio//
    setSearchTerm(newSearchTerm); //actualiza el estado//
    onSearch(newSearchTerm); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Find Products"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;