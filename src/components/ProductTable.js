import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    render() {
        let productRow = this.props.products.map((product) => {
            return <ProductRow key={product.id} product={product} />
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productRow}
                </tbody>
            </table>
        )
    }
}
