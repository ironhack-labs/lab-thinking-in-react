import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  const filtered = props.products.data.filter((product) => {
    if (props.checkbox) {
      if (
        product.name.toLowerCase().includes(props.query.toLowerCase()) &&
        product.stocked
      ) {
        return product;
      }
    } else if (product.name.toLowerCase().includes(props.query.toLowerCase())) {
      return product;
    }
  });
  let tabledata = filtered.map((product, idx) => (
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
