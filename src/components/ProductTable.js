import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    state = {
        search : this.props.search.search
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                            <ProductRow products={this.props.products} search={this.props.search}/>
                    </tbody>
                </table>
            </div>
        )
    }
}
