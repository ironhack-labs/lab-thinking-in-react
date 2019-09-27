import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
  const passedQuery = props.passedQuery;
  const productsToRender = props.products.map(prod => {
    const rowStyle = prod.stocked ? { color: 'black' } : { color: 'red' };
    return <ProductRow product={prod} style={rowStyle} />;
  });

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {productsToRender}
      </tbody>
    </table>
  );
};

export default ProductTable;
