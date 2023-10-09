import React, { useState } from 'react';

function SearchBar({ products }) {
  const [search, setSearch] = useState('');
  const [showOnlyInStock, setShowOnlyInStock] = useState('');
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setShowOnlyInStock(e.target.checked);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toUpperCase().includes(search.toUpperCase());
    const inStock = product.inStock;
    
    if (showOnlyInStock) {
      return matchesSearch && inStock;
    } else {
      return matchesSearch;
    }
  });

  return (
    <>
      <div className="mt-4">

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={handleChange}
        />
          {filteredProducts.length > 0 ? (
            search && filteredProducts.map((product) => (
           <p key={product.id}>{product.name}</p>
           ))
          ) : (
           <p>No products in stock</p>
          )}
        
      </div>

      <div className="form-check form-check-inline mt-5">
        <input 
          className="form-check-input" 
          type="checkbox" 
          checked={showOnlyInStock} 
          onChange={handleCheckboxChange} 
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Only show products in stock
        </label>
      </div>
    </>
  );
}

export default SearchBar;