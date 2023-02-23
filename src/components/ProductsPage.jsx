// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);

  function handleSearch(userInput){
    if(!userInput){
      setProducts(jsonData)
    }
    else{
      const filterProducts = jsonData.filter((productIndividual)=>{
        return productIndividual.name.toLowerCase().includes(userInput.toLowerCase())
      })
      setProducts(filterProducts)
    }
  }
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar handleSearch={handleSearch}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage;