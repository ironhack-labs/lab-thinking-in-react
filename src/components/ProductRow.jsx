import React from 'react';

export default function ProductRow(props) {
    
    return (
        <tr style={props.stocked ? {color:'black'} :{color:'red'}}>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}