import React from "react";

export default function ProductRow({ name, price, color }) {
  return (
    <React.Fragment>
      <tr>
        <td>
          <p style={{ color: color }}>{name}</p>
        </td>
        <td>
          <p>{price}</p>
        </td>
      </tr>
    </React.Fragment>
  );
}
