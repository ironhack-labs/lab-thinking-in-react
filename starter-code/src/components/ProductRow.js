import React, { Component } from 'react';


class ProductRow extends Component {

  render() {
    let styleNotStocked = {
      color: "red"
    }
    return (
      <tr className="ProductRow">
          <td>{this.props.product.name}</td>
          <td>{this.props.product.stocked ? "Yes" : <span style={styleNotStocked}>No</span>}</td>
          <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;