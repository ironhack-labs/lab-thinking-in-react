import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from '../Components/SearchBar';
import ProductTable from '../Components/ProductTable';

function ProductsPage () {
  const productsData = jsonData;
  
  return(
      <div>
        <SearchBar />
        <ProductTable productsData={productsData} />
      </div>    
  )
}

export default ProductsPage