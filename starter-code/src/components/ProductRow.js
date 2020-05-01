import React from 'react';

const ProductRow = props => {

    return (
        <tr>
            {props.stocked ? <td>{props.name}</td> : <td style={{ color: "red" }}>{props.name}</td> }
            <td>{props.price}</td>
     </tr>
)
}
export default ProductRow;