import React from "react";

function ProductRow({product})
{
    return(
        <>
            <tr style={{color: product.inStock ? "black" : "red" }}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        </>
    )
}

export default ProductRow