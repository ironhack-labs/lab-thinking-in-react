//The products that are out of stock will be displayed in red
import React from 'react';

/*export default function ProductRow(props) {
    return (
        <tr style={{ color: props.stocked ? "black" : "red" }}>
            <td>{ props.name }</td>
            <td>{ props.price }</td>
        </tr>
    );
}*/

const ProductRow = (props) => {
    return (
        <tr
        style={{
            color: 
        }}
        >
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}

export default ProductRow