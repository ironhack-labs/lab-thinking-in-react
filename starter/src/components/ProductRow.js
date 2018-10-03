import React from 'react';


export const ProductRow = ({price, name}) => {
    return (
            <tr>
                <td><h4>{name}</h4></td>
                <td><h4>{price}</h4></td>
            </tr>
    )
}   