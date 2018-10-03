import React from 'react';


export const ProductRow = ({price, name}) => {
    return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
    )
}   