import React from "react"
function ProductRow(props) {
    console.log(props)
    console.log('heeey')

    const {name, price, inStock} = props.product
    const productColorClass = inStock ? 'in-stock' : 'out-of-stock';
    return(
        <tr>
            <td className={productColorClass}>{name}</td>
            <td className={productColorClass}>{price}</td>
        </tr>
    )
}

export default ProductRow