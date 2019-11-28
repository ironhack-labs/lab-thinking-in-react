import React, { Component } from 'react';

export default class Search extends Component {
    handleChange = event => {
      this.props.setQuery(event.target.value);
    };

    handleCheckboxChange = event => {
      this.props.setChecked(event.target.checked);
    };
  
    render() {
      return (
        <div>
        <label htmlFor="search">Search</label>
          <input
            type="text"
            name="query"
            value={this.props.query}
            onChange={this.handleChange}
          />
          <label htmlFor="stock">Only Show Product in Stock</label>
             <input
            type="checkbox"
            name="checked"
            checked={this.props.checked}
            onChange={this.handleCheckboxChange}
          />    

        </div>
      );
    }
  }

