import React, { Component } from "react";

class ProductRow extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { name, price } = this.props.product;
      return (
        <tr>
        {
          this.props.product.stocked
          ?
          <td class='black-word'>{name}</td>
          :
          <td class='red-word'>{name}</td>
        }
          <td>{price}</td>
        </tr>
      )
  }
}

export default ProductRow;