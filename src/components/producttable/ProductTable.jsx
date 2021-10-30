import React from 'react';
import ProductRow from '../productrow/ProductRow';

function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <ProductRow {...product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
