import React from "react";
import ProductRow from "./ProductRow";
import products from "../data.json";

export default function ProductTable({ search, isOnStock }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td />
          <td className="font-weight-bold">Sporting Goods</td>
        </tr>
        {products.data
          .filter(product => product.category === "Sporting Goods")
          .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
          .filter(product => !isOnStock || product.stocked === true)
          .map((product, i) => (
            <ProductRow key={i} product={product} />
          ))}

        <tr>
          <td />
          <td className="font-weight-bold">Electronics</td>
        </tr>
        {products.data
          .filter(product => product.category === "Electronics")
          .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
          .filter(product => !isOnStock || product.stocked === true)
          .map((product, i) => (
            <ProductRow key={i} product={product} />
          ))}
      </tbody>
    </table>
  );
}
