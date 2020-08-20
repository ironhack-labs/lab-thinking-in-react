import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
  return (
    <table className="productTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow products={props.products}/>
      </tbody> 
    </table>
  )
}

export default ProductTable
