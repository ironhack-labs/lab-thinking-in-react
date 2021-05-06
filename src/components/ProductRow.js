import React from 'react'

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