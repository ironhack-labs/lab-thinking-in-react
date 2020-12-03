import React, { Component } from 'react'
import ProductRow from './ProductRow'
export default class ProductTable extends Component {
    render() {
        return (
            <div>
                <table>
                <tr>
                <th>Name</th>
                <th>Categroy</th>
                <th>Price</th>
                </tr>
                <ProductRow products = {this.props.data} query = {this.props.query} isStock = {this.props.isStock} />
                </table>
            </div>
        )
    }
}
