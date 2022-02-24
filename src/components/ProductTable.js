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
          </tr>
        </thead>
      </table>
      <ProductRow productRows={props.products} />
    </>
  );
}
