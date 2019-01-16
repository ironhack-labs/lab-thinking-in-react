import React, { Component } from "react";
class Input extends Component {
  render() {
    return (
      <label className={this.props.className}>
        <input
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          type={this.props.type}
        />
        {this.props.text}
      </label>
    );
  }
}
export default Input;
