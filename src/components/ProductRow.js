import React from 'react';

export default function ProductRow(props) {
    
    const filtered = props.products.data.filter(product => 
        product.name.toLowerCase().includes(props.query.toLowerCase())
    )

    return (
        <>
            { filtered.map(product => {
                const outOfStock = (product.stocked ? 'black' : 'red')
                return (
                    <tr>
                        <td style={{ color: outOfStock}}> { product.name } </td>
                        <td> { product.price } </td>
                    </tr>
                )
            })}
        </>
    )
}
