import React, { Component } from 'react'


function ProductRow(props) {


   
        return (
            <tr key={props.key}>
                <td>{props.name}</td>
                <td>{props.price}</td>
            </tr>
         )
        
}

export default ProductRow;