import React from "react";

const ProductRow = ({product}) => {
    const {category, price, name, inStock} = product;
    const outOfStock = inStock ? "" : "outOfStock"

    return(
        <tr>
            <td className={outOfStock}> {name} </td>
            <td> {price} </td>
        </tr>
    )
}

export default ProductRow;

 