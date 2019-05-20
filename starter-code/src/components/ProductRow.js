import React from "react";

const ProductRow = ({ filtered, products }) => {
  console.log("filtered desde ProductRow: ", filtered);
  let data = products.data;
  return (
    <tbody>
      {!filtered.length
        ? data.map((item, index) => (
            <tr key={index}>
              <td style={{ color: item.stocked ? "black" : "red" }}>
                {item.name}
              </td>
              <td style={{ color: item.stocked ? "black" : "red" }}>
                {item.price}
              </td>
            </tr>
          ))
        : filtered.map((item, index) => (
            <tr key={index}>
              <td style={{ color: item.stocked ? "black" : "red" }}>
                {item.name}
              </td>
              <td style={{ color: item.stocked ? "black" : "red" }}>
                {item.price}
              </td>
            </tr>
          ))}
    </tbody>
  );
};

export default ProductRow;
