import React from 'react'

export default function ProductRow(props) {

    const {name, price, stocked, category} = props.product

    const outOfStock = !stocked ? {color: 'red'} : null

    return (
        <div className="product-row">
            <p style={outOfStock}>{name}</p>
            <p>{price}</p>
        </div>
    )
}



  /* <tr>
        <td style={outOfStock}>{name}</td>
        <td>{price}</td>
    </tr> */
