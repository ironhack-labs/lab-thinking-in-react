import React from 'react';

function ProductRow(props) {
  function textColor(stock) {
    if (stock === true) return 'black';
    else return 'red';
  }

  return (
    <tbody>
      {props.productsList.map((product) => (
        <tr key={product.id}>
          <td
            style={{
              color: textColor(product.stocked),
            }}
          >
            {product.name}
          </td>
          <td>{product.price}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default ProductRow;
