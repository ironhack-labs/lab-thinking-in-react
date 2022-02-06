

import React, { useState } from 'react';
import data from '../../data.json';
import ProductTable from '../components/ProductTable';
import SearchBar from '../components/SearchBar';

const ProductsPage = () => {
  const [products, setProducts] = useState(data);
  const [filterProducts, setFilterProducts] = useState(products)
  //console.log("productos", products)

 
  return (
    <>
        <h1> IronStore</h1>
        <SearchBar setFilterProducts = {setFilterProducts} />
        <br/>
        <ProductTable productsData = {filterProducts}/>
    </>
  );
};


export default ProductsPage;
