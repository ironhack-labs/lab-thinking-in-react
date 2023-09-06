import React from 'react';
import ProductsRow from './ProductsRow';

function ProductTable({ products, searchText }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="ProductTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <ProductsRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
