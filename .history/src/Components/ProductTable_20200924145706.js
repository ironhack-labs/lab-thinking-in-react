import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  const tabledata = props.products.data.map((product, idx) => (
    <ProductRow idx={idx} name={product.name} price={product.price} />
  ));
  return (
    <div>
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
