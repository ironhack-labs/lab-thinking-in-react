import React from "react";

function SearchBar({ search, setSearch }) {
  const handleInputChange = (e) => {
    setSearch(e.target.value); // Actualizar el estado en ProductsPage
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search} // Mostrar el valor actual del texto de búsqueda
        onChange={handleInputChange} // Manejar cambios en el input
      />
    </div>
  );
}

export default SearchBar;
