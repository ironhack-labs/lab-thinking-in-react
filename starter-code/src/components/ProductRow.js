import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        return (
            <tr className="ProductRow">
                <td>{ this.props.product.data } </td>
                <td> { this.props.product.price } </td>
                <td> { this.props.product.stocked ? "Yes" : "No" } </td>
            </tr>
        );
    }
}

export default ProductRow;