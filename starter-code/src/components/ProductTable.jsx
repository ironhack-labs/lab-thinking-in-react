import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  return (
    <div className="table-container">
      <table className="product-table table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((p, i) => (
            <ProductRow name={p.name} price={p.price} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
