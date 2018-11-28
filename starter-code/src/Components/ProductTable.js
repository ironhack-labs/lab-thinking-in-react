import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const rows = () => {
    return props.data.data.map((e, i) => {
      return <ProductRow key={i} {...e} />
    });
  };

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
            {rows()}
        </tbody>
    </table>
  </div>
  );
};

export default ProductTable;
