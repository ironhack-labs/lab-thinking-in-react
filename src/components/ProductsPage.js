// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);

  const checkProductsType = (event) => {
    console.log(event.target.value)

    if(event.target.value === ''){
      setProducts([...jsonData])
      return products
    }

    const filteredProducts = products.filter(product => product.name.toUpperCase().startsWith(event.target.value.toUpperCase()) )
    setProducts(filteredProducts)
    return filteredProducts
  }

  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar checkProductsType={checkProductsType} />
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage