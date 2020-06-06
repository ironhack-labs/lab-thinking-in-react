import React from 'react';

// importing styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

function ProductRow(props) {

    console.log("props.stocked: " + props.stocked + ", " + "props.currentStock: " + props.currentStock)
    return (
        <tr>
            <td style={ (props.stocked) ? {color:"black"} : {color:"red"}} hidden={(props.stocked === false && props.currentStock === true) ? true : false}>{props.name}</td>
            <td style={(props.stocked === false && props.currentStock === false) ? {color:"green"} : {color:"grey"}}>{props.price}</td>
        </tr>
    )
}

export default ProductRow;