import React from "react";

const DataElectronics = props => {
    let outOfStock;
    if (!props.stocked) outOfStock = {
        color: "red"
    }
  return (
  <tr>
    <td style={outOfStock}>{props.name}</td>
    <td>{props.price}</td>
  </tr>
  )
};

export default DataElectronics;
