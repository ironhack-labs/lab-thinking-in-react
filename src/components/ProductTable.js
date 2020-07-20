import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <ProductRow 
                    products={this.props.products} 
                    query={this.props.query}/>
            </table>
        )
    }
}