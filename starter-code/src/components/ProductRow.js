import React, { Component } from 'react';

export default class ProductRow extends Component {

  fontcolorHandler = () => {
    return this.props.stocked ? { color: 'black' } : { color: 'red' };
  };

  render() {
    console.log('props in product Row ', this.props.stocked);

    const divStyle = this.fontcolorHandler();

    return (
      <tr>
        <td style={divStyle}>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}
