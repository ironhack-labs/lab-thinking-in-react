// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const productSearch = (searchTerm) => {
    const searchResult = products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm);
    });

    setFilteredProducts(searchResult);
  };

  return (
    <div className="productsPage">
      <h1>IronStore</h1>

      <SearchBar handleSearch={productSearch} />

      <ProductTable ProductRows={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
