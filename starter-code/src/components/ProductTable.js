import React from "react";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export const ProductTable = ({ prodData }) => {
  return (
    <section className="section">
      <div className="container" id="ProductTable">
        <table className="table is-fullwidth is-striped is-hoverable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <ProductCategoryRow rowCat="Sporting Goods" />
            <ProductRow rowCat="Sporting Goods" prodData={prodData}/>

            <ProductCategoryRow rowCat="Electronics" />
            <ProductRow rowCat="Electronics" prodData={prodData}/>
          </tbody>
        </table>
      </div>
    </section>
  );
};
