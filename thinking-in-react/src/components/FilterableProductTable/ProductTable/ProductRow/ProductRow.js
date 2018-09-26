import React from 'react';
import './ProductRow.css';


const ProductRow = ({ name, price, stocked }) => {
    const classes = !stocked ? "otOfStock" : null;

    return (
        <tr>
            <td className={ classes }>{ name }</td>
            <td>{ price }</td>
        </tr>
        )
};

export default ProductRow;