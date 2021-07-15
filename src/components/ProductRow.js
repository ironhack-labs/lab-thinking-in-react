import React from 'react';

const ProductRow = ({ name, price, stocked }) => {


    return (
        <tr style={{ color: !stocked && 'red' }}>
            <td>{name}</td>

            <td>{price}</td>
        </tr>
    )
}

export default ProductRow;