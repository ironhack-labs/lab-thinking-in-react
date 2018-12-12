import React from "react"

const ProductRow = ({category, price, stocked, name}) => (
  <tr>
      <td>{stocked ? <p>{name}</p> : <p style={{color: "red"}}>{name}</p>}</td>
      <td>{price}</td>
  </tr>
)

export default ProductRow


