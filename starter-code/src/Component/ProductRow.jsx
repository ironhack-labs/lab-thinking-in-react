import React from 'react'

export default function ProductRow({product}) {
    return (
        <React.Fragment>
            <td style={{color : product.stocked?"black":"red"}}>{product.name}</td>
            <td>{product.price}</td>
        </React.Fragment>
    )
}
