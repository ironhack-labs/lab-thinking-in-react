import React, { Component } from 'react';

class ProductRow extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let myColor;
    this.props.stocked ? (myColor = 'black') : (myColor = 'red');

    return (
      <>
        <tr>
          <td style={{ color: myColor }}>{this.props.name}</td>
          <td>{this.props.price}</td>
        </tr>
      </>
    );
  }
}

export default ProductRow;
