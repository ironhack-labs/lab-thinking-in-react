import React from 'react';

export default class ProductRow extends React.Component {
  render() {
    return (

      <tr className={this.props.stocked === false ? "text-danger" : "text-success"}>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}
