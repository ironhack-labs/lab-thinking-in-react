import React from 'react';
import ProductsRow from './ProductRow';

export const ProductTable = (props) => {
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {props.products &&
              props.products.map((elem) => (
                <ProductsRow key={elem.id} {...elem} />
              ))}
        </tbody>
      </table>
    </div>
  );
};
