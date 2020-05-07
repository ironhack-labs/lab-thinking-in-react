import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

export default function ProductTable(props) {
  const filtered = props.products.filter((product) =>
    product.name.toLowerCase().includes(props.search.toLowerCase())
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((product) => {
          return <ProductRow product={product} key={product.name} />;
        })}
      </tbody>
    </table>
  );
}
