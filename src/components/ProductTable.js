import React from 'react';
import { ProductRow } from './ProductRow';

export const ProductTable = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow props={props.props} />
        </tbody>
      </table>
    </>
  );
};
