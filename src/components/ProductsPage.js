import './styles.css';
import React, { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const ProductsPage = () => {
  const allProducts = jsonData;
  const [products, setProducts] = useState(allProducts);

  const handleSearch = (search, check) => {
    search.search.length
      ? setProducts(filterProducts(search))
      : setProducts(allProducts);
  };

  const filterProducts = (filter) => {
    const searchProducts = allProducts.filter((product) => {
      return product.name.toLowerCase().includes(filter.search.toLowerCase());
    });
    const stockProducts = searchProducts.filter((product) => {
      return product.inStock === filter.inStock;
    });
    return filter.inStock ? stockProducts : searchProducts;
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearch} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
