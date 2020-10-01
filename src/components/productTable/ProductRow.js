import React from 'react';

const ProductRow = ({ name, price, stocked }) => {

    return (

        <tr className="contact">
            <td style={!stocked ? { color: 'red' } : {}}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow;