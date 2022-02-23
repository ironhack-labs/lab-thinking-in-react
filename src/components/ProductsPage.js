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

  const onlyInStock = (input) => {
    let filteredProducts;
    if (input) {
      filteredProducts = products.filter((product) => {
        return product.inStock === true;
      });
      setProducts(filteredProducts);
    } else {
      filteredProducts = [...products];
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="productsPage">
      <h1 className="heading">IronStore</h1>

      <SearchBar handleSearch={productSearch} inStock={onlyInStock} />

      <ProductTable ProductRows={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
