import React, { Component } from 'react'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
    render() {
        return (
            
    <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody><ProductRow products={this.props.products}/></tbody>
    
</table>
            
        )
    }
}

export default ProductTable
