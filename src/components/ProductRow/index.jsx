import React from 'react';

function ProductRow(props) {
const { product } = props;

return (
    <tr>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.category}</td>
    </tr>
);
}

export default ProductRow;
