import React from "react"

const ProductRow = (props) => {

    const {product} = props

    return (
        
        <tr key={product.id}>
            { !product.stocked ?     
                <td className="out-of-stock">{product.name}</td>
                :
                <td>{product.name}</td>
            }
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow
