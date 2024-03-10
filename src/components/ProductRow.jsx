import React from 'react';

function ProductRow(props) {
    return (
        <tbody>
            {props.products.map((prod, index) => (
                <tr key={index}>
                    <td style={{ color: prod.inStock ? 'inherit' : 'red' }}>{prod.name}</td>
                    <td>{prod.price}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default ProductRow;
