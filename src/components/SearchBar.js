import React from 'react';

function SearchBar({ search, setSearch , showInStockOnly, setShowInStockOnly}) {
  
    const handleSearch = (event) => {
        setSearch(event.target.value);
      };

      const handleInStockChange = (event) => {
        setShowInStockOnly(event.target.checked);
      };
      
  return (
    <div>
           <label>
        Search Products
        <input type="text" value={search} onChange={handleSearch} />
      </label>
      <label>
        <input
          type="checkbox"
          checked={showInStockOnly}
          onChange={handleInStockChange}
        />
        Only show products in stock
      </label>
    </div>
  
  );
}

export default SearchBar;
