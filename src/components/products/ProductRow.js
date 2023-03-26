import React, { useState } from 'react'

function ProductRow({ product }) {
    const [hasStock, setStock] = useState(product.inStock)

    const tdStyle = {
        color: 'red'
    }
    

    return (
            <tr>
                <td style={!product.inStock ? tdStyle : undefined }>{product.name}</td>
                <td>{product.price}</td>
            </tr>
    )
}

export default ProductRow