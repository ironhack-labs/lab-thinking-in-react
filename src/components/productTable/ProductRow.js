import React from 'react'

const ProductRow = ({ name, price, stocked}) => {

    return (
        <>
            <th className={stocked ? "text-dark" : "text-danger" }>{name}</th>
            <th>{price}</th>
        </>
    )

}

export default ProductRow