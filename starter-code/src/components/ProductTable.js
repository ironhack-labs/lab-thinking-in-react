import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ data, search, checkStock }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((item) =>
            checkStock
              ? item.name.toLowerCase().includes(search) && item.stocked
              : item.name.toLowerCase().includes(search)
          )
          .map((item, index) => (
            <ProductRow key={index} {...item} />
          ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
