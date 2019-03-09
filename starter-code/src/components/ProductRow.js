import React from "react";

class ProductRow extends React.Component {
  render() {
    return (
      <tr>
        <td> {this.props.item.name} </td>
        <td> {this.props.item.price} </td>
      </tr>
    );
  }
}

export default ProductRow;
