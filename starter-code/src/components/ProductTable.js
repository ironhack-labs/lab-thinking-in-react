import React from "react";
import ProductRow from "./ProductRow";

export default function ProductTable({ products }) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {products.map((e, i) => (
        <ProductRow key={i} price={e.price} name={e.name} />
      ))}
    </table>
  );
}
