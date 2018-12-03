import React from "react";

const Item = ({ item }) => (
  <tr>
    <td className={!item.stocked ? "red" : ""}>{item.name}</td>
    <td>{item.price}</td>
  </tr>
);

export default Item;
