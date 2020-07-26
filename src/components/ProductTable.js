import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {
        console.log("this.props in ProductTable:", this.props.products.data)

        const rows = this.props.products.data.map((ele, i) => {
            return (
                <ProductRow key={i} product={ele} />
            )
        })

        return (
            <div className="productTable">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody >
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}
