import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
  //  console.log(`FROM PT:`, props.query)

  return (
    <div className="product-table">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="table-body-items">
          <ProductRow
            // Make props accessible for ProductRow.js
            products={props.products}
            query={props.query}
            checked={props.checked}
          />
        </tbody>
    </table>
    </div>
  )
};

export default ProductTable;
