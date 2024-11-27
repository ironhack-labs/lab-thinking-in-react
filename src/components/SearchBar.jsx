import { useState } from "react";

function SearchBar({ onSearch, onFilterInStock }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value, showInStockOnly);
  };

  const handleFilterInStock = (event) => {
    setShowInStockOnly(event.target.checked);
    onFilterInStock(event.target.checked);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <label>
        <input
          type="checkbox"
          checked={showInStockOnly}
          onChange={handleFilterInStock}
        />
        Show in-stock only
      </label>
    </div>
  );
}

export default SearchBar;
