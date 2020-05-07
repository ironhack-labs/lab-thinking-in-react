
import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = event => {
    this.props.triggerSetQuery(event.target.value)
  }
  handleCheckboxChange = event => {
      this.props.triggerSetState(event.target.checked)
    }
  render() {
    return (
      <div className="App">
          <div>
        <input
          type="text"
          name="query"
          value={this.props.query}
          onChange={this.handleChange}
        />
        <br/>
         <label>Only Products in stock:</label>
          <input type="checkbox"  checked={this.props.isStocked} onChange={this.handleCheckboxChange} />
      </div>
      </div>
    );
  }
}

export default SearchBar;