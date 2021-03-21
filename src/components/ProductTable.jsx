import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ search, products }) => {
  const filteredProducts = products.filter((product) =>
    product.name.match(new RegExp('^' + search, 'i'))
  );

  return (
    <table className="productTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
