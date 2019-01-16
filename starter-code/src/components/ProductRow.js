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
            {prod.stocked ? <td><i className="fas fa-check-circle"></i></td> : <td><i className="fas fa-exclamation-circle"></i></td>}
          </tr>
        ))}
    </React.Fragment>
  );
};
