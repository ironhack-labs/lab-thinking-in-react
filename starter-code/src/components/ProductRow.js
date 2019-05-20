import React from "react";

const ProductRow = products => {
  const data = products.products.products.products.data;
  return (
    <tbody>
      {data.map((product, index) => 
      <tr key={index}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>)}
    </tbody>
  );
};

export default ProductRow;
