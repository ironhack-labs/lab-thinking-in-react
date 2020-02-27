import React from 'react';
import './ProductRow.css';
const ProductRow = ({ category, price, stocked, name, addNewList }) => {
  return (
    <tbody className="media">
      <tr className="content">
        <td style={{ color: stocked ? 'black' : 'red' }}>{name}</td>
        <td>{price}</td>
      </tr>

      {/* <div className="control">
                            <button className="button is-info" onClick={addNewList} value={[quantity + " " + name + " = " + calories]}>   +  </button>
                        </div> */}
    </tbody>
  );
};

export default ProductRow;
