import React from 'react';

import ProductRow from '../ProductRow/ProductRow';

const ProductTable = ({ products }) => {
  const displayProducts = (allProduct) => {
    return allProduct.map((oneProduct, index) => (
      <ProductRow key={index} product={oneProduct} />
    ));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{displayProducts(products)}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
