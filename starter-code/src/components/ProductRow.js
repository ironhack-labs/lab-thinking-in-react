import React from 'react';

const ProductRow = props =>  {


    return (
        <tr>
            {!props.stocked && <td className="red-item">{props.name}</td>}
            {props.stocked && <td>{props.name}</td>}
            <td>{props.price}</td>
        </tr>
    )
}
    
export default ProductRow;