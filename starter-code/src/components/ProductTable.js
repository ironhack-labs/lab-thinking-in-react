import React, { Component } from 'react';
import ProductRow from './ProductRow.js';

export default class ProductTable extends Component {
    render() {
        return (
            <div className="container">
                <h1>This is the product Table</h1>
                <ProductRow />
            </div>
        );
    }
}
