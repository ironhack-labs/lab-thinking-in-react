import React, { Component } from 'react';
import '../App.css';

const ProductRow = props => { 
    return(
      <tr>
        {props.product.stocked ? <td>{props.product.name}</td> : 
        <td className='stoked'>{props.product.name} </td>}
        <td>{props.product.price}</td>
    </tr>
    )
}

export default ProductRow;