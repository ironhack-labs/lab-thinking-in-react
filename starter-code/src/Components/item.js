import React from 'react';

export default class Item extends React.Component {
  render() {
    return (
      <tr key={this.props.item.idx}>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.price}</td>
      </tr>
    )
  }
}