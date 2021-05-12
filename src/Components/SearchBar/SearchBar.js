import React from 'react';

import './SearchBar.css';

export default class SearchBar extends React.Component {
  state = {
    text: '',
    toggle: false,
  };

  handleTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.textChangeListener(this.state.text);
  };

  handleCheckChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.toggleChangeListener(this.state.toggle);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleTextChange} name="text" />
        <label>Hide out of stock items</label>
        <input
          type="checkbox"
          onChange={this.handleCheckChange}
          name="toggle"
        />
      </div>
    );
  }
}
