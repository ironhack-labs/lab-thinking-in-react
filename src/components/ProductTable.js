import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.name} product={product} />
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ProductTable;
