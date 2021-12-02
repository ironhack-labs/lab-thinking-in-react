import React from 'react'

const ProductRow = (props) => {
    const { product } = props

    return (
        <>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </>
    )
}

export default ProductRow