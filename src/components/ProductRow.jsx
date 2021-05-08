import React from 'react';

function ProductRow({ name, price, stocked }) {
 
  return (
    <table className="table">
      {
        stocked
          ? (<tr className="table-success">
            <th scope="row">{name}</th>
            <td>{price}</td>
          </tr>)
          : (<tr className="table-success" style={{ color: "red" }}>
            <th scope="row">{name}</th>
            <td>{price}</td>
          </tr>)
      }
    </table>
  );
}

export default ProductRow;