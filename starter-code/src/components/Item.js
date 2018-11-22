import React from "react";

const Item = ({ data }) => (
  <tr>
    <td className={data.stocked ? null : "uk-text-danger"}>{data.name}</td>
    <td>{data.price}</td>
  </tr>
);

export default Item;