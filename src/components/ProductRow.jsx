import React from "react";

const ProductRow = ({ products }) => {
  return (
    <>
      {[...products].map((product) => {
        return (
          <tr key={product.id}>
            <td className={product.inStock ? "" : "text-danger"}>
              {product.name}
            </td>
            <td>{product.price}</td>
          </tr>
        );
      })}
    </>
  );
};

export default ProductRow;
