import React from 'react'
import ProductRow from '../ProductRow'
import './styles.css'

const ProductTable = ({products}) => {
  return (
    <table className='table'>
      <thead className='titles'>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>        
        {products.map(({id, name, price, inStock}) => {
          return (
            <ProductRow 
              key = {id}
              name = {name}
              price = {price}
              inStock = {inStock}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default ProductTable