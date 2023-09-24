import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ProductRow({ product }) {
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (!product.inStock) {
      setColor("red");
    }
  }, []);

  return (
    <tr>
      <td style={{ color: color }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
