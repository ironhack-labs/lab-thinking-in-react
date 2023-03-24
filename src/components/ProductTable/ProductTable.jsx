import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

function ProductTable({ products, inputText }) {
  //TODO: apply regex to search filter
  return (
    <div>
      <h1>Products Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.filter((product) => (product.name.toLowerCase().includes(inputText))).map(product => (<ProductRow product={product} key={product.id} /> ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable;