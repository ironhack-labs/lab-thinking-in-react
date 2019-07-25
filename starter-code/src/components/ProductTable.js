import React from 'react';
import ProductRow from './ProductRow'

const ProductTable = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <ProductRow data={data} />
      </tbody>
    </table>

  )
}

export default ProductTable