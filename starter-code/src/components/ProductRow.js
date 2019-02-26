import React, { Component } from "react";
import "../App.css";

class ProductRow extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <tr>
                <td className={this.props.item.stocked ? "green" : "red"}>
                    {this.props.item.name}
                </td>
                <td className={this.props.item.stocked ? "green" : "red"}>
                    {this.props.item.price}
                </td>
            </tr>
        );
    }
}

export default ProductRow;