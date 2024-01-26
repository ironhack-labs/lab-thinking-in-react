// src/components/ProductsPage.js

import { useState } from 'react';
import booksData from '../data.json';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(booksData);
  
  return(
      <div className="main-container">
        <h1>IronStore</h1>
        <SearchBar></SearchBar>
        <ProductsTable products={products} setProducts={setProducts}></ProductsTable>
      </div>    
  )
}

export default ProductsPage