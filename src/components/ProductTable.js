import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = (data) => {
    const products = [...data]

    return (
        <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Price</th>
          <th>In Stock</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        {products.map((products) => (
          <ProductRow key={products.id} product={products} />
        ))}
      </tbody>
    </table>
    );
};

export default ProductTable;