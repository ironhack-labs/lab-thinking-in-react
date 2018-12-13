import React from "react";

const Productw = ({ name, price, stocked }) => {
  return (
    <tr>
      {stocked ? <td>{name}</td> : <td className="brow">{name}</td>}
      <td>{price}</td>
    </tr>
  );
};

export default Productw;