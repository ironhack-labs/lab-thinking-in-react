import React from 'react';

export default function ProductRow({product}) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
        </tr>
    )
}
