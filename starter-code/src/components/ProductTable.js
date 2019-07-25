import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
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
          {
            props.productsData.map((e, i) => <ProductRow name={e.name} price={e.price} stock={e.stocked} key={i} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable;