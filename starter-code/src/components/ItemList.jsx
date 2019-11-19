import React from 'react';
const ItemList = ({ itemName, itemPrice, stocked, onlyInStock }) =>
  !stocked && onlyInStock ? null : (
    <tr
      className="itemRows"
      style={{ border: `1px solid ${stocked ? 'blue' : 'red'}` }}
    >
      <td>{itemName}</td>
      <td>{itemPrice}</td>
    </tr>
  );
export default ItemList;
