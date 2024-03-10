import React from 'react';
import ProductRow from './ProductRow';

function Table(props) {
    const productTable = <table>
        <thead>
            <th>Name</th>
            <th>Price</th>
        </thead>
        <ProductRow {...props} />
    </table>
    return (
        <div>{productTable}</div>
    );
}

export default Table;
