// src/components/ProductsPage.js
import React, { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);

  const [filteredProductsArray, setFilteredProductsArray] = useState(jsonData);

  const filterProductsByString = stringToSearch => {
    const filteredProduct = products.filter(productElement => {
       return productElement.name.toLowerCase().includes(stringToSearch.toLowerCase());
     });
 
     setFilteredProductsArray(filteredProduct);
   }
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar handleSearch={filterProductsByString} />
        <ProductTable myFilteredArray={filteredProductsArray}/>
      </div>    
  )
}

export default ProductsPage;