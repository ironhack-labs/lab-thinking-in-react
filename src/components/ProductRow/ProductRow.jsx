import React from 'react';

function ProductRow({name, price}) {
    return (
        <tr className="ProductRow">
            <th scope="row">{name}</th>
            <td>{price}</td>
        </tr>
    );
}

export default ProductRow;