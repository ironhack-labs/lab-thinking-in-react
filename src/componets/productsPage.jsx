import React, { useState } from 'react';
import data from './data.json';
import searchBar from './searchBar';
import productTable from './productTable';


function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrar productos según la búsqueda
  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">IronStore - Product Search</h1>
      <searchBar onSearch={setSearchQuery} />
      <productTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
