import React from "react";

const Row = ({ name, price }) => {
  return (
    <tr>
      <td> 
        <p> {name} </p>
      </td>
      <td>
        <p>{price} </p>
      </td>
    </tr>
  );
};

export default Row;
