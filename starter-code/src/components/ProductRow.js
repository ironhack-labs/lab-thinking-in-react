import React from "react";

export const ProductRow = ({ rowCat, prodData }) => {
  return (
    <React.Fragment>
      {prodData
        .filter(prod => prod.category === rowCat)
        .map(prod => (
          <tr key={prod.name}>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
          </tr>
        ))}
    </React.Fragment>
  );
};
