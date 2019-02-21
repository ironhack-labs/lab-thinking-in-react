import React from "react";
import ProductRow from "./ProductRow";
import products from "../data.json";

export default function ProductTable({ search, isOnStock }) {
  console.log("TCL: ProductTable -> search", search);
  return (
    <table className="table w-50 m-auto  text-center text-white shadow">
      <thead className="bg-primary">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="font-weight-bold bg-info" colSpan="2">
            Sporting Goods
          </td>
        </tr>
        {products.data
          .filter(product => product.category === "Sporting Goods")
          .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
          .filter(product => !isOnStock || product.stocked === true)
          .map((product, i) => (
            <ProductRow key={i} product={product} search={search} />
          ))}
        <tr>
          <td className="font-weight-bold bg-info" colSpan="2">
            Electronics
          </td>
        </tr>
        {products.data
          .filter(product => product.category === "Electronics")
          .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
          .filter(product => !isOnStock || product.stocked === true)
          .map((product, i) => (
            <ProductRow key={i} product={product} search={search} />
          ))}
      </tbody>
    </table>
  );
}
