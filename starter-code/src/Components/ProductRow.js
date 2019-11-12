import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const { name, price, stocked } = this.props;

    console.log(stocked);

    return (
      <tr>
        <td className={ stocked ? ".uk-text-secondary" : ".uk-text-danger"}>{name}</td>
        <td>{price}</td>
        <td>{stocked ? "Yes" : "No"}</td>
      </tr>
    );
  }
}