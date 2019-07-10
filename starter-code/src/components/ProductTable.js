import React from "react";
import ProductRow from "./ProductRow";

function ProductTable(props) {
  return (
    <div className="products-container">
      <table className="products-table">
        <thead>
          <tr>
            <th colSpan="1">Name</th>
            <th colSpan="1">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, i) => (
            <ProductRow key={i} {...product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
