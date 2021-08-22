import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {

    const styleObj = {
      color: this.props.stocked ? 'black' : 'red',
    };

    return (
        <tr>
          <td style={styleObj}>{this.props.name}</td>
          <td>{this.props.price}</td>
        </tr>
    );
  }
}
