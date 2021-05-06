import React from 'react'
import './ProductRow.css'

const ProductRow = ({name, price, stocked}) => {
    return (
        <div className="listedElement">
            <span className="product-name">{ name }</span> <span>{ price }</span>
            <hr></hr>
        </div>
    )
}

export default ProductRow