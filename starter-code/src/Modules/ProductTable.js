import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ originalData }) => {
  return (
    <div className="container">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {originalData.map((current, index) => {
            return <ProductRow key={index} item={current} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
