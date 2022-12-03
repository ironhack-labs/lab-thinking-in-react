import React, { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';

const ProductPage = () => {
  const [products, setProducts] = useState(jsonData);
  const productsBackup = jsonData;

  const updateSearch = (queries) => {
    const { term, checked } = queries;

    const matches = productsBackup.filter(product => {
      const prodLower = product.name.toLowerCase();
      const termLower = term.toLowerCase();

      const result = checked ?
        prodLower.includes(termLower) && product.inStock :
        prodLower.includes(termLower);

      return result;
    });

    setProducts(matches);
  }

  return (
    <div className='product-page'>
      <h1>IronStore</h1>
      <SearchBar updateSearch={updateSearch}/>
      <ProductTable products={products}/>
    </div>
  )
}

export default ProductPage;