import React from 'react'

function ProductRow({product}) {
    return (
        <div style={{ color: `${product.stocked ? "green" : "red"}` }} className="product-row-container">
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductRow
