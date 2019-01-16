import React from "react";

export const ProductRow = ({children}) => {
  return (
    <tr>
      <td className={children.stocked ? null:"noStock"}>
        {children.name} 
      </td>
      <td>
        {children.price}
      </td>
    </tr>
  );
};


