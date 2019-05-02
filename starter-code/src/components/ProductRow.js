import React, { Component } from "react";
import "../ProductRow.css";

export default class ProductRow extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className={"product " + (this.props.stocked ? 'stocked' : null)}>
      <tr>
        <td><p>{this.props.name}</p></td>
        <td><p>{this.props.price}</p></td>
      </tr>
      </div>
    );
  }
}
