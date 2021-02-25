import React from 'react'

export default function ProductRow(props) {
    //console.log(props.product.id)

    return (
        
            <tr key={props.product.id}>
                <td style={props.product.stocked ? { color: 'black'} :{color: 'red'} } >{props.product.name } </td>
                <td>{props.product.price } </td>
            </tr>
            
      
    )
}
