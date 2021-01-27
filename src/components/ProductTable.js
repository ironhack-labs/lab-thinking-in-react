import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {props.products.map(p => <ProductRow key={p.id} product={p} />)}
      </tbody>
    </table>
  )
}
