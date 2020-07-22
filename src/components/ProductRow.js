import React from 'react'

function ProductRow(props) {
    if(props.stocked){
        return (
            <tr>
                <td>{props.name}</td>
                <td>{props.price}</td>
            </tr>
        )
    }else{
        return (
            <tr >
                <td className='stocked'> {props.name}</td>
                <td className='stocked'>{props.price}</td>
            </tr>
        )
    }
}

export default ProductRow
