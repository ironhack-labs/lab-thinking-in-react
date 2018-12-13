import React, {Fragment} from "react"

 const ProductRow = ({category, price, stocked, name}) => (
  <Fragment>
  <tr>
      <td style={!stocked ? { color: "red" } : {}}>{name}</td>
      <td>{price}</td>
  </tr>
</Fragment>
 )

 export default ProductRow