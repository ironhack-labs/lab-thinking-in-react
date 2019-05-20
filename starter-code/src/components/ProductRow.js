import React from "react";

const ProductRow = ({ filtered }) => {
  console.log("filtered desde ProductRow: ", filtered);
  return (
    <tbody>
      {filtered.map((item, index) => (
        <tr key={index}>
          <td style={{ color: item.stocked ? "black" : "red" }}>{item.name}</td>
          <td style={{ color: item.stocked ? "black" : "red" }}>{item.price}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductRow;
