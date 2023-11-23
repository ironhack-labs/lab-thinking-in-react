import React from 'react';

function ProductRow({ product }) {
    const { name, price } = product;

    return (
        <tr key={product.id}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
}

export default ProductRow;