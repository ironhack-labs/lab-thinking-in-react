import React from "react";
import ProductRow from "./ProductRow.js";

const ProductTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map(product => {
          return (
            <ProductRow
              name={product.name}
              price={product.price}
              stocked={product.stocked}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
