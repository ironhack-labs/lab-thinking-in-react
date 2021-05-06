import ProductRow from './ProductRow';
import React from 'react';
import './ProductTable.css';

export default function ProductTable(props) {
  const rows = props.products.map((product) => {
    return <ProductRow key={product.id} product={product} />;
  });

  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
