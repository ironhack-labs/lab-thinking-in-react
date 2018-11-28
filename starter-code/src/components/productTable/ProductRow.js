import React from "react";

const ProductRow = (props) => {
    return(
            <tr>
                {props.stocked ? <td>{props.name}</td> : <td className="outStocked">{props.name}</td>}
                <td>{props.price}</td>
            </tr>
    )
};

export default ProductRow;