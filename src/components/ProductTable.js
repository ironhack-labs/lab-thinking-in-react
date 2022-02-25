import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
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
                <ProductRow products={props.products}/>
            </tbody>
        </table>
    </div>
  )
}
