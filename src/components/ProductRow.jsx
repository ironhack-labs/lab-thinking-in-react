import React, { Component } from 'react'

class ProductRow extends Component {
    render() {
        const product = this.props.product;
        return (
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}
export default ProductRow;