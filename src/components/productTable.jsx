/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ProductRow from "./productRow";

function ProductTable({ products }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;