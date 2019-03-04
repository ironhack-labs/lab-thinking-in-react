import React from 'react';
import ProductRow from "./ProductRow";

const ProductTable = () => {
  return(
  <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Item Price</th>
    </tr>
    </thead>

    <tbody>
    <tr>
     <ProductRow/>
    </tr>
    </tbody>
  </table>

  );
}

export default ProductTable;