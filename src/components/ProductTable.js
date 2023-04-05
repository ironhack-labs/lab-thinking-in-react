import { useState } from 'react';
import ProductRow from './ProductRow';

function ProductTable (props) {
    const { products } = props


  
  return(
      <div>

        <ProductRow products={products}/>

      </div>    
  )
}
export default ProductTable