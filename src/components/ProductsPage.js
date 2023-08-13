import React, { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearch = (searchTerm, stockFilter) => {
    const filteredProducts = jsonData.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (stockFilter) {
      setProducts(filteredProducts.filter(product => product.inStock));
    } else {
      setProducts(filteredProducts);
    }
  };

  const handleStockChange = stockFilter => {
    setInStockOnly(stockFilter);
    handleSearch('', stockFilter);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={handleSearch} onStockChange={handleStockChange} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;



