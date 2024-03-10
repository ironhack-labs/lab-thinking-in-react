import { useEffect, useState } from "react";

function ProductRow({ product }) {

  const [stock, setStock] = useState("available")

useEffect(() => {
  if (!product.inStock) {
    setStock("unavailable")
  }
})
 

  return (
        <tbody>
            <tr className={stock}>
              <td >{product.name}</td>
              <td>{product.price}</td>
            </tr>
        </tbody>
  );
}

export default ProductRow;
