import React from 'react';

function ProductRow({eachProduct}) {
    return (
        <tr>
            <td className={eachProduct.inStock ? '' : 'redText'}>
            {eachProduct.name}</td>
            <td>{eachProduct.price}</td>
        </tr>
    )
};

export default ProductRow;