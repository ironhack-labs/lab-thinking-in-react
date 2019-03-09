import React, { Component } from 'react';


class SearchBar extends Component {

  state = {
    searchtext: ""
 };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'searchtext') {
      this.props.callme(value);
    }

    let o = {};
    o[name] = value; // o['searchtext'] = value
    this.setState(o);
  }

  render() {

    return (
      <form>
        <input type="text" className='search-bar' name='searchtext' value={this.state.searchtext} onChange={this.handleChange}/>
      </form>
    );
  }
}

export default SearchBar