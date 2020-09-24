import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  let filtered = props.products.data.filter((product) =>
    product.name.toLowerCase().includes(props.query.toLowerCase())
  );

  if (props.onStock === true) {
    filtered = filtered.filter((product) => product.stocked);
  }

  let tabledata = filtered.map((product, idx) => (
    <ProductRow idx={idx} name={product.name} price={product.price} />
  ));
  console.log(filtered);
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
