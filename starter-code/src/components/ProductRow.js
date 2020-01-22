import React, { Component } from 'react';

class ProductRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <tr>
        <td>{this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }

}

export default ProductRow;