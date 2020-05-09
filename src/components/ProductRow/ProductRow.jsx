import React from 'react'
import './ProductRow.css';

export default function ProductRow(props) {

    return (
        <div>
        {props.product.stocked && <li>{props.product.name} {props.product.category} 
        {props.product.price}</li>}

        {!props.product.stocked && <li style={{color:'red'}}>{props.product.name} {props.product.category} 
        {props.product.price}</li>}

        </div>
    )
}
