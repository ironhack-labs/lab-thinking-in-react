import React from 'react';

function ProductRow(props) {
    const { products } = props;

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    }

    const rowStyle = {
        width: '100%',
        borderBottom: '1px solid #ddd',
        padding: '10px 0',
        marginLeft: '30px'
    };



    return (
        <div className='tableContainer'>
            <table style={tableStyle}>
                {products.map((product) => (
                    <tr key={product.id} style={rowStyle}>
                        {product.inStock ? (
                            <td>{product.name}</td>
                        ) : (
                            <td className='outOfStock'>{product.name} </td>
                        )}
                        <td>{product.price}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default ProductRow;
