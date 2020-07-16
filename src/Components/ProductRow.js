import React from 'react'

export default function ProductRow(props) {
        const arr = props.products.map(product => {
            return (
                <tr key={ product.name }>
                    <td>{ product.name }</td>
                    <td>{ product.price }</td>
                </tr>
        )})
        return (
            <tbody>{arr}</tbody>
        )
}