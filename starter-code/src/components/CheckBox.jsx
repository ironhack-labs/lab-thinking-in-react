import React, { Component } from 'react';

class CheckBox extends Component {
  checkIfChecked = e => {
    this.props.changeHandler(e.target.value);
  };
  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.checkIfChecked} />
      </div>
    );
  }
}

export default CheckBox;
