import React from 'react';



function ProductRow(props) {



    return (
  <tr>

    <td style={ (props.stocked) ? {color:"black"} : {color:"red"}} hidden={ (props.onlyInStock && props.stocked === false) ? true : false }>{props.name}</td>
    <td hidden={ (props.onlyInStock && props.stocked === false) ? true : false } > {props.price}</td>
  </tr> 
   
 );
}

export default ProductRow;