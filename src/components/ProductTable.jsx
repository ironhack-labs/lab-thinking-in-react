import React from "react";
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  const rows = products.map((product) => (
    <ProductRow key={product.name} product={product} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>In Stock</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
