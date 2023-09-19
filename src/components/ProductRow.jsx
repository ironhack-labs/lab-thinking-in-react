import React from "react"


function ProductRow(props) {

    const { name, price, inStock } = props.product
    const productColorClass = inStock ? 'in-stock' : 'out-of-stock';
    return (
        <>
            <tr>
                <td className={productColorClass} style={{ paddingTop: "20px" }}>{name}</td>
                <td className={productColorClass} style={{ paddingTop: "20px" }}>{price}</td>
            </tr>
        </>
    )
}

export default ProductRow