import React from 'react';
import './Components.css'

function ProductRow(props) {
    return (
        <tbody className={props.tableClass}>
            {props.products.map((prod, index) => (
                <tr key={index}>
                    <td style={{ color: prod.inStock ? '' : 'red' }}>{prod.name}</td>
                    <td>{prod.price}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default ProductRow;
