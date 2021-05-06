import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {
        return (
            <div className="product-table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProductRow products={this.props.products} query={this.props.query} stock={this.props.stock}/>
                    </tbody>
                </table>
            </div>
        )
    }
}
