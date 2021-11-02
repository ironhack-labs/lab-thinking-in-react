import React from 'react';
import ProductRow from '../productrow/ProductRow';

function ProductTable(props) {
  const filterInput = props.filterInput;
  const rows = [];

  props.products.forEach((product) => {
    if (product.name.indexOf(filterInput) === -1) {
      return;
    }
    rows.push(<ProductRow product={product} key={product.name} />);
  });

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
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
