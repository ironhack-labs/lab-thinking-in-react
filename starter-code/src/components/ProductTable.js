import React from 'react'
import ProductRow from './ProductRow';

const ProductTable = ({data}) => {
  const products = data.map((product, i) => (
    <div className = "col-4 mb-4" key = { i }>
      <ProductRow
      product={product}
      />  
    </div>
    ))
  

  return (
    <div>
      <div>
        Name              Price
      </div>
      <div> 

      </div>
      <div>
      {products}
      </div>
    </div>
  )
}

export default ProductTable