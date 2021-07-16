import React, { Component } from 'react';
import ProductRow from './ProductRow';
import '../App.css';

export default class ProductTable extends Component {
    
    render() {

        const filtered = this.props.products.filter(product => {
            return product.name.toLowerCase().includes(this.props.query.toLowerCase())
        });

        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProductRow
                            products={filtered}
                        />
                    </tbody>
                </table>
            </>
        )
    }
}
