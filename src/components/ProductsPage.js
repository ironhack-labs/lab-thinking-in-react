import React, { useState } from 'react';
import jsonData from './data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleToggleInStock = (showInStock) => {
    setShowInStockOnly(showInStock);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
      onSearch={handleSearch}
      showInStockOnly={showInStockOnly}
      onToggleInStock={handleToggleInStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;

