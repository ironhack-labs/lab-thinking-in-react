import React from 'react'
import './ProductRow.css'

const ProductRow = ({ price, stocked, name }) => {

    return (
        <tr>
            <td className={!stocked ? 'out-of-stock' : null}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow