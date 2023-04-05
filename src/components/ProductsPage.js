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
      <div className='container'>
        <h1>IronStore</h1>
        
        <div className='row'>
          <div className='d-flex justify-content-center'><SearchBar checkProductsType={checkProductsType} inStockProduct={inStockProduct}/></div>
        </div>
        <div className='row'>
        <div className='d-flex justify-content-center'><ProductTable products={products}/></div>
          
        </div>
  


      </div>    
  )
}

export default ProductsPage