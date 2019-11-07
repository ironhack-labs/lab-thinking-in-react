import React, { Component } from 'react';

class Row extends Component {
  render() {
    const { name, price, stocked } = this.props;
    return (
      <tr>
        <td className={stocked ? `none` : `red-text`}>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default Row;
