import React from 'react'

const ProductRow = (props) => {
    const eachProduct = props.productElement
    // console.log("ROW", props.productElement)
    return (
        <tr>
            <td>{eachProduct.name}</td>
            <td>{eachProduct.price}</td>
        </tr>
    )
}

export default ProductRow
