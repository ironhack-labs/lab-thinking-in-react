import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import jsonData from '../data.json'

const ProductPage = () => {
  const [products, setProducts] = useState(jsonData)
  
  return (
    <>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable products={products}/>
    </>
  );
};

export default ProductPage;
