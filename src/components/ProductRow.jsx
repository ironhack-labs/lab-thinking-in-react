import React from 'react'

const ProductRow = ({product}) => {
    return (
        
            <tr>
                <td style={{color : product.stocked === true ? "black" : "red"}}>{product.name}</td>
                <td style={{color: product.stocked === true ? "black" : "red"}}>{product.price}</td>
            </tr>
    )
}

export default ProductRow
