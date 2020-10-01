import React, { Component } from 'react'





const ProductRow = ({ name, price }) => {

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>

        </div>
    )
}
export default ProductRow