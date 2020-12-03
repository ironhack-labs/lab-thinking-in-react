import React from 'react'
import ProductRow from '../../components/ProductRow/ProductRow.jsx'

const ProductTable = (props) => {
  const product = props.data.data
  return (
    <div> 
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tbody>
          {product.map((el) => 
          ( <ProductRow key={el.id}{...el} /> ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable