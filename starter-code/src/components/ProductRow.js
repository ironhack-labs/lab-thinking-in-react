import React, { Fragment } from 'react'

const ProductRow = ({ product }) => (
    <Fragment>
        <tr>
            <td style={!product.stocked ? { color: "red" } : {}}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    </Fragment>
)

export default ProductRow