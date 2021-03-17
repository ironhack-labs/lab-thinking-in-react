import React, { Component } from 'react';
import ProductRow from './ProductRow';
import '../Styles/ProductTable.css'

export class ProductTable extends Component {
    render() {
        return (
            <table id="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <ProductRow products = {products}/>
            </table>
        )
    }
}

export default ProductTable
