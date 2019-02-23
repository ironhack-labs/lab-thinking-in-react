import React, { Component } from 'react';

import '../App.css';
import ProductRow from './ProductRow'

const productTable = (props) => {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {props.list.map((item) => {
                return <ProductRow item={item}/>
            })}

        </table>
    )
}

export default productTable;