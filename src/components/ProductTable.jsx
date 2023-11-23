import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
    const { products } = props;

    const tableStyle = {
        width: '50%',
        borderCollapse: 'collapse',
        marginTop: '20px',

    };

    const thStyle = {
        padding: '10px',
        backgroundColor: '#f2f2f2',
        borderBottom: '1px solid #ddd',
        textAlign: 'left'

    };

    return (
        <div className="table-container">
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductRow products={products} />
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;
