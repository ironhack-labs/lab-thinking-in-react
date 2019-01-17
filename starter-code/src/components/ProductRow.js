import React from "react";

const productRow = ({ categoryRow, productsData }) => {
  return (
    <React.Fragment>
      {productsData
        .filter(prod => prod.category === categoryRow)
        .map(prod => (
          <tr key={prod.name}>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
          </tr>
        ))}
    </React.Fragment>
  );
};

export default productRow;