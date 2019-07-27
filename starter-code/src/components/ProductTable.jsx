import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow {...props}/>
      </tbody>
    </table>
    
  )
}

export default ProductTable;