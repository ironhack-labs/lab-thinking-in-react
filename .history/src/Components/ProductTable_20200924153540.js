import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  let tabledata = props.products.data.map((product, idx) => (
    <ProductRow idx={idx} name={product.name} price={product.price} />
  ));
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>{tabledata}</tbody>
      </table>
    </div>
  );
}
