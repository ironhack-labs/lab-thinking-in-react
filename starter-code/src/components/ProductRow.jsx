import React, { Component } from 'react';

export default class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productRow: this.props.productRow
    };
  }

  render() {
    console.log(this.props.productRow.stocked);
    return (
      <div className="row">
        <div
          className={
            (!this.props.productRow.stocked && 'col red-text') || 'col text'
          }
        >
          <div>{this.props.productRow.name}</div>
        </div>
        <div className="col">
          <div>{this.props.productRow.price}</div>
        </div>
      </div>
    );
  }
}
