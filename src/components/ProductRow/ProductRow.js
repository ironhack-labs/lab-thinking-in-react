import React from 'react'
import './ProductRow.css'

const ProductRow = ({name, price}) => {

    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        </tbody>
    )
}

export default ProductRow