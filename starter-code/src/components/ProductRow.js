import React from 'react'

const ProductRow = (props) => {
    return (
        <tbody>
            <tr>
                {
                props.stocked ?
                <td >{props.name}</td>
                :
                <td style={{color:'red'}}>{props.name}</td>
                }
                <td>{props.price}</td>
            </tr>
        </tbody>
    )
}

export default ProductRow
