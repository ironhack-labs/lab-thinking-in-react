import React from 'react';
import '../item.css'


export default class Item extends React.Component {
  render() {
    let color = "redColor"
    if (this.props.item.stocked) {
      color = "blueColor"
    }
    return (
      <tr key={this.props.item.idx}>
        <td className={color}>{this.props.item.name}</td>
        <td>{this.props.item.price}</td>
      </tr>
    )
  }
}