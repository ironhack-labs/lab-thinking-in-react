import React, { Component } from 'react'
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductRow searchInput={this.props.searchInput} products={this.props.products} />
                </tbody>
            </table>
        )
    }
}

export default ProductTable
