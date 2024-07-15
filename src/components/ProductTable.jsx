import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable({products}) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>In Stock</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return <ProductRow key={product.id} product={product} />
                })}
            </tbody>
        </table>
    </div>
  )
}
