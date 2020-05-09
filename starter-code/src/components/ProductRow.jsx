import React, { Component } from 'react';
import '../App.css';

export class ProductRow extends Component {
    render() {

        let color = this.props.stock;
        if (color) {
            color = "black";
        } else {
            color = "red";
        }

        return (
            <tr className="row">
                <td className={color}>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}

export default ProductRow
