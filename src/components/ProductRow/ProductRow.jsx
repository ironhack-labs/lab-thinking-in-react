import data from "../../data.json"
import React from "react"
import "./ProductRow.css"

const ProductRow = ({ id, name, price, inStock }) => {

    const colorRow = !inStock ? "red" : "black"

    return (
        <tr key={id}>
            <td style={{ color: colorRow }}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}



export default ProductRow