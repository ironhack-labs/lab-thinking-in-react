import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }

  handleChange = (e) => {
    this.props.onQueryChange(e.target.value);
  }

  render() {
    console.log('render SearchBar');
    return (
      <div className="search">
        <input 
          type="text"
          onChange={e => this.handleChange(e)}/>
        <input type="radio" value="true"/>
      </div>
    )
  }
}

export default SearchBar;