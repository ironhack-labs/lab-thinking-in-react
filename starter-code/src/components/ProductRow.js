import React, { Component, Fragment } from 'react';

class ProductRow extends Component {
  render() {
    return (
      <Fragment>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.price}</td>
      </Fragment>
    );
  }
}

export default ProductRow;