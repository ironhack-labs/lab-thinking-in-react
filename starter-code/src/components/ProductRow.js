import React from 'react'

export default function ProductRow(props) {
    var outOfStock;
    (props.item.stocked) ?  outOfStock= "inStock": outOfStock="outOfStock"
    return (
        <tr className="row" key={props.index}>
            <td className={outOfStock}> {props.item.name}</td>  
            <td> {props.item.price}</td>
        </tr>  
        
    )
}
