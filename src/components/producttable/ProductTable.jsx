import React from 'react';
import ProductRow from '../productrow/ProductRow';

function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <td>
            <h3>Name</h3>
          </td>
          <td>
            <h3>Price</h3>
          </td>
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
