// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>
        <div className='main-container'>
            <div className='search-bar'>
                <SearchBar />
            </div>
            <div className='products-table'>
                <ProductTable products={products}/>
            </div>
        </div>
      </div>    
  )
}
export default ProductsPage;