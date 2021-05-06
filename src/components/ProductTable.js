import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    render() {
        return (
            <div>
                <table className="tg">
                    <thead>
                        <tr>
                            <th className="tg-0pky">Name</th>
                            <th className="tg-0pky">Price</th>
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

