import React, {Component} from 'react';

const ProductRow = props=>{

    return(
        props.item.stocked?
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
        </tr>:

        <tr className="notThere">
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
        </tr>
        
    )
}

export default ProductRow