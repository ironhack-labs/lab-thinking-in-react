import React, { Component } from 'react';




function EachProduct(props){


    return(
      <tr>
        <td>
        {props.productName}
        </td>
        <td>
        {props.productPrice}
        </td>
      </tr>
    )
}








export default EachProduct;