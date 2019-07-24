import React, {Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props)
  }

  render(){

    return (
      <div className="borderblue">

        <div>hey search bar</div>
        <input onChange={this.props.searchFunc} placeholder="input here"/>
      </div>
    )
  }
}

export default SearchBar;