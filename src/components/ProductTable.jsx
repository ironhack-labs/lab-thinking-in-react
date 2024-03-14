import React from 'react'
import ProductRow from './ProductRow'


function ProductTable({products}) {
  return (
    <div>{products.map((product)=>{
        return <ProductRow key={product.id} product={product}/>
    })}</div>
  )
}

export default ProductTable