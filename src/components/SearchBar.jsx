import React, { useState } from 'react';

function SearchBar({ products }) {
  const [search, setSearch] = useState('');
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredProducts = products.filter((products) => {
    if (products.name.toUpperCase().includes(search.toUpperCase())) {
      return true;
    }
    
  });

  return (
    <div className="mt-4">

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={handleChange}
      />
        {filteredProducts.map((products) => (
          <li key={products.id}>{products.name}</li>
        ))}
      
    </div>
  );
}

export default SearchBar;