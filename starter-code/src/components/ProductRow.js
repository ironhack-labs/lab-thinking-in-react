import React from 'react';

const ProductRow = props => {
  if (props.checked === false) {
    return props.filtered.map((product, index) => {
      return (
        <tr key={index} style={{height:"30px"}}>
          {product.stocked === true ? (
            <td >{product.name}</td>
          ) : (
            <td style={{ color: 'red' }}>{product.name}</td>
          )}
          <td>{product.price}</td>
        </tr>
      );
    });
  } else if (props.checked === true) {
    return props.onlyStocked.map((product, index) => {
      return (
        <tr key={index} style={{height:"30px"}}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
  }
};

export default ProductRow;
