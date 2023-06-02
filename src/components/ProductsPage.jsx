import React, { useState } from 'react';
import './ProductsPage.css';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>IRONSTORE</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
