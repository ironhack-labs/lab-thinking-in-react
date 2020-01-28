import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    render() {
        //console.log(this.props);
        return (
            <span>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(oneProduct => { return <ProductRow key={oneProduct.id} {...oneProduct} />}) }
                    </tbody>
                </table>
            </span>
        )
    }
}
