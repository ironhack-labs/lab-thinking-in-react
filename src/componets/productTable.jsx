import React from "react";
import productRow from "./productRow";

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <tr key={product.category}>
          <th colSpan="4" className="bg-light">
            {product.category}
          </th>
        </tr>
      );
    }
    rows.push(<productRow key={product.id} product={product} />);
    lastCategory = product.category;
  });

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>En Stock</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;


