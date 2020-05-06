import React from 'react';
import ProductRow from './ProductRow';
import '../styles/ProductTable.css';

function ProductTable(props) {
  const products = props.products;
  return (
    <div className="table">
      <table>
        <thead>
          <tr className="table__rows">
            <th className="table__cells">Name</th>
            <th className="table__cells">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow key={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
