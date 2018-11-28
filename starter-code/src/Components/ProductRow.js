import React from 'react';

const ProductRow = ({category, price, stocked, name}) => {

    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
}

export default ProductRow;