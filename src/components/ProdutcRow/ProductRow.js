import React from 'react';
import './ProductRow.css';

const ProductRow = ({product}) => {

    const { name, price, inStock } = product;

        console.log(inStock)
    return (
        <tr>
            <td className={!inStock && 'out-of-stock'}>{name}</td>
            <td>{price}</td>
        </tr>
    );
}
export default ProductRow;