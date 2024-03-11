import React from 'react';
import ProductRow from './ProductRow';
import './Components.css'


function Table(props) {
    const productTable = <table>
        <thead className='table'>
            <th>Name</th>
            <th>Price</th>
        </thead>
        <ProductRow {...props} tableClass="table" />
    </table>
    return (
        <div className='table-container'>{productTable}</div>
    );
}

export default Table;
