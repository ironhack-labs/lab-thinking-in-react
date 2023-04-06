import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({products}) => {

    console.log('product table ', products)
  return (
    <div>
    <h1>{products.name}</h1>
    <ProductRow products={products} />
    </div>
  )
}

export default ProductTable