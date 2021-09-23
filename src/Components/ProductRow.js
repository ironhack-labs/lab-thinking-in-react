import React from 'react'

export default function ProductRow(props) {

    const display = () => {
        return (
            <tr>
                <th>{props.name}</th>
                <th>{props.price}</th>
            </tr>
        )
    }

    return (
        <>
            {display()}
        </>
    )
}
