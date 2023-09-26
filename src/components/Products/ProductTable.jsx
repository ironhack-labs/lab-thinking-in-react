/* eslint-disable react/prop-types */
import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
  const agrupCategories = Array.from(
    new Set(products.map((product) => product.category))
  ).map((category) => ({
    name: category,
    products: products.filter((product) => product.category === category),
  }));

  return (
    <div className="mt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {agrupCategories.map((category) => (
            <React.Fragment key={category.name}>
              <tr>
                <td colSpan="2" className="table-active fw-bold">
                  {category.name}
                </td>
              </tr>
              {category.products.map((product) => (
                <ProductRow key={product.id} {...product} />
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
