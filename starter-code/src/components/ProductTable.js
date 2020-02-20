import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products
          .filter(product => {
            return product.name.toLowerCase().includes(props.searchText);
          })
          .map(product => {
            // TODO: unique key
            return <ProductRow product={product} key={product.name} />;
          })}
      </tbody>
    </table>
  );
};

export default ProductTable;
