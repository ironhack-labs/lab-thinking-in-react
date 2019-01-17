import React from 'react';

const productCategoryRow = (props) => {
  return (
    <tr>
      <th colSpan="2">{props.category}</th>
    </tr>
  )
};

export default productCategoryRow;