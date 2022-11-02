import React from 'react'

export const ProductRow = ({ product }) => {
    const name = product.inStock ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;
    return (
        <tr className='border-bottom'>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>

    )
};
