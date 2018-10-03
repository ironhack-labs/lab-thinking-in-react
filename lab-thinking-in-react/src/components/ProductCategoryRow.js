import React from "react";
import ProductRow from "./ProductRow";


const ProductCategoryRow = prop => {
  return (
    <tr>
    <h3>{prop.category}</h3>
    {prop.data.map(e => {
        return <ProductRow key={e.name}{...e}/>;
      })}
    </tr>
  );
};

export default ProductCategoryRow;
