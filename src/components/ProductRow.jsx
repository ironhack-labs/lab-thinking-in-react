import React, { Component } from 'react';

export default class ProductRow extends Component {
    render() {
        return (
            <tr className="row">
                <td
                    style={
                        this.props.products.stocked === false
                            ? { color: 'red' }
                            : { color: 'black' }
                    }
                >
                    {this.props.products.name}
                </td>
                <td>{this.props.products.price}</td>
            </tr>
        );
    }
}
