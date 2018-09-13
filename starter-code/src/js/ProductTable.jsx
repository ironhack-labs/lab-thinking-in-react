import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ query, showOnlyStocked, categories, productData }) => {
  let rows = [];
  if (categories.length > 0) {
    categories.forEach((category, index) => {
      let products = productData
        .filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
        .filter(product => {
          return product.category === category;
        });

      if (showOnlyStocked) {
        const tempProducts = products.filter(product => product.stocked);
        products = tempProducts;
      }

      if (products.length > 0) {
        rows.push(<ProductCategoryRow category={category} key={index} />);
        products.forEach(product => {
          rows.push(<ProductRow product={product} key={product.name} />);
        });
      }
    });
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
