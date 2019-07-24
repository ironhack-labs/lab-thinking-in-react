import React from 'react';

function ProductRow(props) {
    return (
        <tr>
            <td className={!props.stocked ? 'red-row' : ''}>{props.name}</td>
            <td className={!props.stocked ? 'red-row': ''}>{props.price}</td>
        </tr>
    )
}

export default ProductRow;