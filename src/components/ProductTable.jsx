import { useState } from "react"
import ProductRow from "./ProductRow"

function ProductTable({products}) {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      {products.map((product) => { 
       return <ProductRow key={product.id} product={product}/>
    })}
    </table>
  )
}

export default ProductTable
