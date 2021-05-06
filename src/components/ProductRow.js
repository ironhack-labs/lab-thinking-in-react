import React, { Component } from 'react';
import '../instock.css';

export default class ProductRow extends Component {
  redOrBlack(bool) {
    if (!bool) {
      return 'red';
    }
  }

  render() {
    return (
      <>
        <ul className={this.redOrBlack(this.props.data.stocked)}>
          <li>{this.props.data.category}</li>
          <li>{this.props.data.price}</li>
          <li>{this.props.data.name}</li>
        </ul>
      </>
    );
  }
}
