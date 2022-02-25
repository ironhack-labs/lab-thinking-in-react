import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow
            productRows={props.products}
            secQuery={props.queryProp}
            inStockProp={props.inStockProp}
          />
        </tbody>
      </table>
    </>
  );
}
