import { useState } from "react";

const ProductRow = ({ product }) => {
  let className = "red";
  if (product.inStock) className = "green";

  return (
    <div>
      <p className={className}>
        {product.name} {product.price}
      </p>
    </div>
  );
};
export default ProductRow;
