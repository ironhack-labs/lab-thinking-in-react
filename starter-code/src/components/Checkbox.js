import React, { Component } from 'react';

export default class Checkbox extends Component {
  render() {
    return (
      <div>
        <label htmlFor="checked">Only show products in stock</label>
        <input
          type="checkbox"
          name="checked"
          id="checked"
          checked={this.props.checked}
          onChange={this.props.handleCheckboxChange}
        />
      </div>
    );
  }
}
