import React from 'react';
import ProductsRow from './ProductsRow';

function ProductTable(props) {
  const { productsToShow } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table>
        <thead>
          <tr>
            <th style={{ padding: '2vh 10vh' }}>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductsRow productsToShow={productsToShow} />
      </table>
    </div>
  );
}

export default ProductTable;