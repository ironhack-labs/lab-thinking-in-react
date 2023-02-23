import { useState } from "react"

function ProductRow(props) {
    return(
        <tr className="row">
        {props.product.inStock && <td className="name-cell">{props.product.name}</td>}
        {!props.product.inStock && <td className="name-cell red">{props.product.name}</td>}
        <td className="price-cell" >{props.product.price}</td>
        </tr>
        )
}

export default ProductRow