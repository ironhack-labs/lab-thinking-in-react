import React from 'react'

export default function ProductRow(props) {
        const arr = props.products.map(product => {
            return (
                <tr key={ product.name }>
                    <td>{ product.name }</td>
                    <td>{ product.price }</td>
                    <td>{ product.stocked ? 1 : 0 }</td>
                </tr>
        )})
        return (
            <tbody>{arr}</tbody>
        )
}