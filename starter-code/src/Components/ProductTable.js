import React, { Component } from "react";

const ProductTable = props => {
  const ProductRow = props.products.map((product, index) => {
    return (
      <tr key={index}>
        <td align="left">{product.name}</td>
        <td align="left"> {product.category}</td>
        <td align="right">{product.price}</td>
      </tr>
    );
  });

  return (
    <div>
      <br />
      <table>
        <tr>
          <th width="120px" align="left">
            Name
          </th>
          <th width="120px" align="left">
            Category
          </th>
          <th width="120px" align="right">
            Price
          </th>
        </tr>
        {ProductRow}
      </table>
    </div>
  );
};

export default ProductTable;
