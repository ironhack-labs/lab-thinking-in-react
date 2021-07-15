import React from 'react';

const ProductRow = (props) => {
    console.log('props from ProductRow: ', props)
    
    return (
        <>
        {props.products.map(product => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
                ))}
        </>
    );
}

export default ProductRow;