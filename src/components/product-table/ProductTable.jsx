import React, { useState } from "react";
import ProductRow from "../product-row/ProductRow";

function ProductTable({ filteredProducts }) {
  return (
    <>
      <div>
        <table className="container table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductTable;
