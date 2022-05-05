import { useState } from 'react';

function ProductRow (props) {
    const { name, price, inStock } = props;
    const outOfStyle = { color: 'red', }
    const inStyle = { color: 'black' }

    return(
            <tr>
            <td style={inStock ? inStyle : outOfStyle}>{ name }</td>
            <td>{ price }</td>
            </tr>            
    )
}

export default ProductRow;