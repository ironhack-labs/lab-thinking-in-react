import React from 'react';
import ProductRow from '../productRow/ProductRow.js'



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
          {props.data.map(product => {
            return (
              <ProductRow key={product.id} product={product} />
            )
          })}
          
    
      </tbody>

    </table>
  );
}

export default ProductTable;