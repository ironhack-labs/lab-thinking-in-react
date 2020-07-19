import React from 'react';
import ProductRow from './ProductRow.js';

export default function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price </th>
        </tr>
      </thead>

      <tbody>
        <ProductRow id= {props.key} filtered={props.products} query={props.query} onStock={props.onStock}/>
      </tbody>
    </table>
  );
}
