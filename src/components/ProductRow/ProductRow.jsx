import { useState } from 'react';
import jsonData from '../../data.json';
import './ProductRow.css'

function ProductRow({product}) {

    return (
        <tr>
            <td className={!product.inStock && "productRed"}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow