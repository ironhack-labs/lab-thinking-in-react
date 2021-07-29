
import React from 'react'

function ProductRow ({ product }) {
    return(
        <tr  className={!product.stocked? "text-danger": "text-success" }>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{!product.stocked? 'not avalaible': "avalaible" }</td>

        </tr>
    )
}

export default ProductRow