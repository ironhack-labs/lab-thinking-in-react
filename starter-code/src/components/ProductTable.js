import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const productTable = ({productsData}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductCategoryRow category="Sporting Goods" />
          <ProductRow categoryRow="Sporting Goods" productsData={productsData}/>

          <ProductCategoryRow category="Electronics" />
          <ProductRow categoryRow="Electronics" productsData={productsData}/>
        </tbody>
      </table>
    </div>
  );
};

export default productTable;
