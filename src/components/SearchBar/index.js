import React, { Component } from 'react';
import './styles.css';

export default class SearchBar extends Component {
    
  render() {
    return (
      <div>
        <form>
          <input type="text" className="search" onChange={this.props.handleInput} />
        </form>
      </div>
    );
  }
}
