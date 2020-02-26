import React, { Component } from 'react';

const ProductRow = (props) => {
  const { name, price, stocked} = props;

    return (
      <tr>
          <td style={{color: !stocked ? 'red': 'black'}}>{name} </td>
          <td>{price} </td>
      </tr>
    );
}

export default ProductRow;