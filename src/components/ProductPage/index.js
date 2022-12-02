import React, { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';

const ProductPage = () => {
  const [products, setProducts] = useState(jsonData);
  const productsBackup = jsonData;

  const getSearch = (term) => {
    const matches = productsBackup.filter(product => {
      const prodLower = product.name.toLowerCase();
      const termLower = term.toLowerCase();

      return prodLower.includes(termLower);
    })
    setProducts(matches);
  }

  return (
    <div className='product-page'>
      <h1>IronStore</h1>
      <SearchBar getSearch={ getSearch }/>
      <ProductTable products={products}/>
    </div>
  )
}

export default ProductPage;