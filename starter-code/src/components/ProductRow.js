import React from 'react';

const ProductRow = (props) => (

<tr>
    <td className={'productos'} style={props.product.stocked ? {color:'gray'}:{color:'orange'} }>{props.product.name}</td>
    <td className={'productos'} style={props.product.stocked ? {color:'gray'}:{color:'orange'} }>{props.product.price}</td>
</tr>
);
export default ProductRow;
