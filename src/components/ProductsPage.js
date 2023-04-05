// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);

  const checkProductsType = (event) => {

    if(event.target.value === ''){
      setProducts([...jsonData])
      return products
    }
    

    const filteredProducts = products.filter(product => product.name.toUpperCase().startsWith(event.target.value.toUpperCase()) )
    setProducts(filteredProducts)
    return filteredProducts
  }

  const inStockProduct = (event) => {
    if(event.target.checked){
      const filteredProducts = products.filter(product => product.inStock)
      setProducts(filteredProducts)
      return filteredProducts
    }else{
      setProducts([...jsonData])
      return products
    }
  }

  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar checkProductsType={checkProductsType} inStockProduct={inStockProduct}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage