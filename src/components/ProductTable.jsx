import React from 'react';
import '../App.css';
import ProductRow from './ProductRow';
import jsonData from '../data.json';

function ProductTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((product, index) => {
            return <ProductRow key={index} product={product} />;
          })}
          ;
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
