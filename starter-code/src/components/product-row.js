import React, { Component } from 'react'

class ProductRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            price: this.props.price

        }

    }
    render() {
        return (
            <tr>
                <td>
                    {this.state.name}
                </td>
                <td>
                    {this.state.price}
                </td>
            </tr>
        )
    }
}
export default ProductRow