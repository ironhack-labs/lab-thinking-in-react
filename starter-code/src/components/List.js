import React, { Component } from "react";
class List extends Component {
  render() {
    let red;
    this.props.element.stocked ? (red = "") : (red = " redColor");
    return (
      <li>
        <div className={this.props.className + red}>
          {this.props.element.name}
        </div>
        <div className={this.props.className}>{this.props.element.price}</div>
      </li>
    );
  }
}
export default List;
