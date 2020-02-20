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
          .filter(product => {
            if (!props.inStock) {
              return true;
            } else if (props.inStock && product.stocked === true) {
              return true;
            }
            return false;
          })
          .map((product, index) => {
            return <ProductRow product={product} key={index} />;
          })}
      </tbody>
    </table>
  );
};

export default ProductTable;
