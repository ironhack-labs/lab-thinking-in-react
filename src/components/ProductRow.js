import React from 'react'

export default function ProductRow(props) {

    return (
            <tr>
                <td>{props.productrow.name}</td>
                <td>{props.productrow.price}</td>
            </tr>
        
    )
}

