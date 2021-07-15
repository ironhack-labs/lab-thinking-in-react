import React from "react"



const ProductRow = ({ name, price, stocked }) => {

    const color = !stocked ? 'red' : null

    return (
        <>
            <tr>
                <td><p style={{ color: `${color}` }}>{name}</p></td>
                <td><p>{price}</p></td>

            </tr>
        </>
    )
}

export default ProductRow