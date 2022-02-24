import React from 'react'

function ProductRow({ product }) {
    let style = { color: "red" }

    if (product.inStock) {
        style = { color: "blue" }
    }
    return (
        <tr style={style}>
            <td><p >{product.name}</p></td>
            <td><p>{product.price}</p></td>
        </tr>
    )
}
export default ProductRow