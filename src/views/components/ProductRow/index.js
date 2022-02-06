

import React from 'react';
import PropTypes from 'prop-types';

const ProductRow = ({name, price, inStock}) => {
  //console.log(name, price)
  const color = inStock ? '' : 'color-red'
  return (
      <tr>
        <td className={color}>{name}</td>
        <td>{price}</td>
      </tr>
    );
};

ProductRow.propTypes = {};

export default ProductRow;
