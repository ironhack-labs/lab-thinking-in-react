import React from 'react';

function ProductRow(props) {
    const { name, price, stocked } = props.product;
    let textColor;
    if (stocked) {
        textColor = "black"
    } else {
        textColor = "red"
    }
    return (
        <tr style={{color: textColor}}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow;