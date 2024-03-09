import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable({productsList}) {

  const displayRow = () => {
    return productsList.map((product) => {
      return <ProductRow key={product.id} {...product}/>
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {displayRow()}
        </tbody>
      </table>
    </div>
  )
}
