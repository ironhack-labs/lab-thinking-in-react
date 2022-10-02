// src/components/ProductsPage.js
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import { useState } from 'react';
import jsonData from './../data.json';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);   
  const [inStock, setInStock] = useState(false);
  
  const filterProductsSearch = function(input) {
    const filtered = products.filter(product => {
      if(inStock){
        return product.name.toLowerCase().includes(input.toLowerCase()) && product.inStock === true;
      }
      return product.name.toLowerCase().includes(input.toLowerCase())
    });
    setFilteredProducts(filtered);
  };
  return(
      
      <div>
        <h1>IronStore</h1>
        <SearchBar filterProductsSearch={filterProductsSearch} inStock={inStock}/>
        <ProductTable filteredProducts={filteredProducts}/>
      </div>    
  )
}

export default ProductsPage