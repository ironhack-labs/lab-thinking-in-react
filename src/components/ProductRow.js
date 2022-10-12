import './styles.css';
import React from 'react';

const ProductRow = (props) => {
  const { inStock, name, price } = props;
  const color = inStock ? 'black' : 'red';
  return (
    <tr>
      <td style={{ color: color }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
