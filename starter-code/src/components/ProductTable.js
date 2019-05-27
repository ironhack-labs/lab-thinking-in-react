import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({products}) => {

  const list = products.map((product, i) => {
    return <ProductRow product={product} key={i}/>
  })

  return (
    <div>
      <div className="header-table"><p className="item-table">Name</p><p className="item-table">Price</p></div>
      {list}
    </div>
  )
}

export default ProductTable