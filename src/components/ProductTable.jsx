import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
  return (
    <div>
        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
            {props.products.map(oneProduct=>{
                return (
                    <ProductRow product={oneProduct}/>
                )
            })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable