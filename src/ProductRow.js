import React from 'react'

export default function ProductRow (props) {
    const filtered = props.data.filter(product => {
        return (
            product.name.toLowerCase().includes(props.query.toLowerCase())
            && (props.stocked === product.stocked || !props.stocked)
        )
    })

    const filteredProducts = filtered.map(product => {
        return (
            <tr key={product.id} style={{color: product.stocked ? 'black' : 'red'}}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    })

    return (
        <tbody>
            {filteredProducts}
        </tbody>
    )
}