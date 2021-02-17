import React from 'react';

import ProductRow from '../ProductRow/ProductRow';

function ProductTable({ search, products }) {
  let productsFilter;

  if (search === '') productsFilter = products;
  else {
    productsFilter = products.filter((product) =>
      product.name.toLowerCase().includes(search.search.toLowerCase())
    );
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsFilter.map((value) => (
          <ProductRow key={value.id} product={value} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
