import ProductRow from './ProductRow';
import React from 'react';

const ProductTable = props => {
  const filteredProducts = props.products
    .filter(product => {
      return product.name.toLowerCase().includes(props.query.toLowerCase());
    })
    .filter(product => {
      if (props.checkBox) {
        return product.stocked;
      }
      return true;
    });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product, index) => {
          return (
            <ProductRow
              key={index}
              category={product.category}
              price={product.price}
              stocked={product.stocked}
              name={product.name}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
