import React, { Component } from 'react';

class ProductRow extends Component {

    style={
        color: this.props.product.stocked ? '' : 'red'
    }

    render () {
        return(
            <tr style={this.style}>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
};

export default ProductRow;