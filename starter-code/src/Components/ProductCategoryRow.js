import React from "react";
import ProductRow from "./ProductRow";

const ProductCategoryRow = ({ category, data }) => {
    console.log("hola",data)
  return (
    <tr>
      <td>{category}</td>
      {data.map(e=> <ProductRow {...e} />)}
    </tr>


  );
};

export default ProductCategoryRow;