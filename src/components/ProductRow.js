import React from 'react';


function ProductRow (props) {

    let color = {color: 'black'}
    if(!props.stock){
        color = {color: 'red'}
    } 


    return(
        <tr style={color}>
        <td>{props.name}</td>
        <td>{props.price}</td>
        </tr>      
    )
}


export default ProductRow