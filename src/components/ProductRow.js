import React from 'react'

function ProductRow(props) {

    return (
        <tr>
            <td style={{ color: props.productData.inStock? "black" : "red" }}>{props.productData.name}</td>
            <td>{props.productData.price}</td>
        </tr>
    )
}

export default ProductRow;
