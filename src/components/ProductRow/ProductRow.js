import React from "react";

function ProductRow({product}){
  return(
    <tr>
      <td className="name-align">{product.name}</td>
      <td>${product.price}</td>
    </tr>
  )
}

export default ProductRow