import React from 'react';
import './ProductRow.css'

function ProductRow(props) {   
    return (
        <tr className={`ProductRow ${!props.product.stocked  && 'red'}`}>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    );
};

export default ProductRow;