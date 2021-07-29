import React from 'react';

function ProductRow ({id, price, stocked, name}) {
    return (
        <tr>
            {stocked ? (
                <td style={{color: 'black'}}>{name}</td>
            ) : (
                <td style={{color: 'red'}}>{name}</td>
           )}
            {stocked ? (
                <td style={{color: 'black'}}>{price}</td>
            ) : (
                <td style={{color: 'red'}}>{price}</td>
           )}
        </tr>
            
    )
}

export default ProductRow