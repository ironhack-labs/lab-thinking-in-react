import React from 'react';
import { ProductRow } from './ProductRow';

export const ProductTable = ({ data }) => {

  return (
    <div>
      <table class="table table-bordered mt-5">
        <thead class="table-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <ProductRow producto={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};