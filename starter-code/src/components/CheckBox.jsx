import React, { Component } from 'react';

export default class Search extends Component {
  handleChangeCheckBox = event => {
    this.props.setQuery(event.target.checked);
  };

  render() {
      console.log(this.props.isChecked)
    return (
      <div>
      <label>
          <span>Only show products on stock</span>
        <input
          type='checkbox'
          name='checked'
          value={this.props.isChecked}
          onChange={this.handleChangeCheckBox}
        />
              </label>
      </div>
    );
  }
}