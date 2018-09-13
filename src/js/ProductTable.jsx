import React from "react";
import ProductCategory from "./ProductCategory";

const ProductTable = props => {
  const prodCat = [];
  props.items.forEach(element => {
    let category = prodCat[element.category];

    if (!category) prodCat[element.category] = [];
    prodCat[element.category].push(element);
  });
  const displayCategories = [];
  for (let key in prodCat) {
    displayCategories.push(
      <ProductCategory
        list={prodCat[key]}
        categoryName={key}
        key={displayCategories.length}
      />
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>{displayCategories}</tbody>
    </table>
  );
};

export default ProductTable;
