import React, { Component } from 'react';

export default class Filter extends Component {
  state = {
    checked: false,
    input: ''
  };
  handleSearch = event => {
    //event.preventDefault();

    if (event.target.type === 'checkbox') {
      this.state.checked = event.target.checked;
    }

    if (event.target.type === 'text') {
      this.state.input = event.currentTarget.value;
    }
    console.log(this.state.checked);
    console.log(this.state.input);

    this.props.clbk(this.state.input, this.state.checked);
  };

  render() {
    return (
      <div>
        <h2>Search:</h2>
        <input type="text" onKeyUp={this.handleSearch} />
        <input
          type="checkbox"
          name="on-stock"
          defaultChecked={this.state.checked}
          onClick={this.handleSearch}
        />
        <label>Only show products on stock </label>
      </div>
    );
  }
}
