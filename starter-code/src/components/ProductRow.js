import React from "react";

const productRow = props => {
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default productRow