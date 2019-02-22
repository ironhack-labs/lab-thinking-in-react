import React, {Component} from "react";
import "./ProductRow.css"

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const product = this.props.product.data;
    return (
      <tr>
        {this.props.inStock === true ? (
          <td>{this.props.productName}</td>
        ) : (
          <td className="red">{this.props.productName}</td>
        )}
        <td>{this.props.productPrice}</td>
      </tr>
    );
  }
}

export default ProductRow;
