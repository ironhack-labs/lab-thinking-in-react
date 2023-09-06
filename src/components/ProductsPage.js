import React, { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, _] = useState(jsonData);
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <div className="ProductsPage">
      <h2>IronStore</h2>
      <h3> Your sports. Your gadgets. Get connected. Get fit. </h3>
      <SearchBar onSearchChange={handleSearchChange} />
      <ProductTable products={products} searchText={searchText} />
    </div>
  );
}

export default ProductsPage;
