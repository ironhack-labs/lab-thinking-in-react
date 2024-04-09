import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (product) => {
    setSearchTerm(product.target.value);
    onSearch(product.target.value);
  };

  return (
    <form role="search" className="">
      <input
        className="form-control me-2 my-3"
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="form-check d-flex gap-2 justify-content-center">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Only show products in stock
        </label>
      </div>
    </form>
  );
}

export default SearchBar;
