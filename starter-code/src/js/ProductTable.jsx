import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ categories, productData }) => {
  let rows = [];

  if (categories.length > 0) {
    categories.forEach((category, index) => {
      rows.push(<ProductCategoryRow category={category} key={index} />);
      productData.forEach(product => {
        if (product.category === category) {
          rows.push(<ProductRow product={product} key={product.name} />);
        }
      });
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
