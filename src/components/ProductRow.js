import React, { Component } from 'react'
import '../components/ProductRow.css'

export default class ProductRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let rowClassName = this.props.product.stocked ? 'in-stock' : 'out-of-stock'

        return (
                <tr>
                    <td className={rowClassName}>{this.props.product.name}</td>
                    <td>{this.props.product.price}</td>
                </tr>         
        )
    }
}
