import React from 'react';

export default function ProductRow(props) {
    
    const filtered = props.products.data.filter(product => {
        return product.name.toLowerCase().includes(props.query.toLowerCase()) && 
        (product.stocked === props.stocked || !props.stocked)
    })

    return (
        <>
            {console.log('filtered', filtered, 'state', props.stocked)}
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
