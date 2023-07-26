import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({products}) => {

    return (
        <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
    );
};

export default ProductTable;