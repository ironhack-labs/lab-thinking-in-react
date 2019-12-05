import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <h2>Search Bar</h2>
        <form action="">
          <input
            type="text"
            name=""
            id=""
            onChange={this.props.onChangeSearchBox}
          />
          <input 
            type="checkbox" 
            name="" 
            id=""
            checked={this.props.checked}
            onChange={this.props.onChangeCheckBox}
            
            />
        </form>
      </div>
    );
  }
}
