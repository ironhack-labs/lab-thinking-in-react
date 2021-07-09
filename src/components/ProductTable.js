import React from 'react';
import ProductRow from './ProductRow';
const ProductTable = ({ items, searchTerm }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {items
          .filter((value) => {
            if ({ searchTerm } === '') {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item, idx) => (
            <ProductRow product={item} key={idx} />
          ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
