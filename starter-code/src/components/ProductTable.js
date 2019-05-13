import React from 'react'
import ProductRow from './ProductRow'

function ProductTable({products}) {
  return (
      <div>
        <span style={{fontSize: '24px'}}>Name</span>
        <span style={{fontSize: '24px', marginLeft: '37%'}}>Price</span>
        {products.map((e, i) => (
          <div>
            <ProductRow key={i} price={e.price} name={e.name} />
          </div>
        ))}
      </div>
    )
}

export default ProductTable