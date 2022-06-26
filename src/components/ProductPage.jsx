import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import jsonData from '../data.json';

const ProductPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [productsDisplayed, setProductsDisplayed] = useState(jsonData);

  const filterList = (query) => {
    const filteredList = products.filter((product) => {
      return product.name.toLowerCase().includes(query.toLowerCase());
    });
    setProductsDisplayed(filteredList);
  };

  return (
    <>
      <h1>IronStore</h1>
      <SearchBar filterList={filterList} />
      <ProductTable productsDisplayed={productsDisplayed} />
    </>
  );
};

export default ProductPage;
