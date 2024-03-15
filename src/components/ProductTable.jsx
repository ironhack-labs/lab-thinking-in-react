import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
    //<div>
    //{products.map((product) => {
    //return <ProductRow key={product.id} product={product} />;
    //})}
    //</div>
  );
}

export default ProductTable;
