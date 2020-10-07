import React, { Component } from 'react';

class ProductRow extends Component {
  state = {
    isStock: true,
  };

  render() {
    return (
      <tr
        style={{
          color: this.state.isStock === this.props.stocked ? 'black' : 'red',
        }}
      >
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
