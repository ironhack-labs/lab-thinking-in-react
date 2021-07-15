import React from 'react';

const ProductRow = (props) => {
    console.log('props from ProductRow: ', props)
    
    const filteredProducts = props.products.filter(product => 
        (product.name.toLowerCase().includes(props.state.query.toLowerCase())) &&
        (props.state.stock === false || (props.state.stock === true && product.stocked === true))
    )

    return (
        <>
        {filteredProducts.map(product => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
                ))}
        </>
    );
}

export default ProductRow;