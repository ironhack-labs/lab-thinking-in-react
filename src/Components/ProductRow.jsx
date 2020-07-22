import React from 'react';

const ProductRow = ({ name, price, stocked }) => {
  return (
    <React.Fragment>
      <tr className="ProductRow">
        <td style={{color: !stocked ? "red" : undefined}} > {name} </td>
        <td> {price} </td>
      </tr>
    </React.Fragment>
  );
};

export default ProductRow;
