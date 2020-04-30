import React from "react";

const ProductRow = (props) => {
    let product = props.product;
    let textColor = product.stocked ? "black" : "red";

    return (
        <td style={{color: textColor}} className="border-right">
            {product.name}
        </td>
    )
}

export default ProductRow;