import React from 'react';
import '../styles/ProductRow.css'

export default function ProductRow({name, price, stocked}) {
    let stock = !stocked ? "outOfStock" : "";

    return (
        <tr className="product-row">
            <td className={stock}>{name}</td>
            <td>{price}</td>
        </tr>
    );
}