import { useState } from "react";

function ProductRow(props) {
    const style = {
        red: {
            fontWeight: "bolder",
            color:  "red"
        }
    };

    return (
        <tr>
            <td key={props.name} style={props.inStock ? {} : style.red}>{props.name}</td>
            <td key={props.price}>{props.price}</td>
        </tr>
    );
}

export default ProductRow;