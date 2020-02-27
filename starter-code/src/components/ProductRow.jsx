import React, { Component } from "react";


class ProductRow extends Component {
  render() {
    return (
        <tr>
            <td className={this.props.stocked ? "black" : "red"}>{this.props.name}</td>
            <td>{this.props.price}</td>
        </tr>    
    );
  }
}

export default ProductRow;
