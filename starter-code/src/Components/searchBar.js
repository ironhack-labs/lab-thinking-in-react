import React from 'react';

export default class SearchBar extends React.Component {

  state = {
    name: ''
  }

  searchBarHandler = (e) => {
    this.props.searchFunctionProp(e.target.value)
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <input type="text" onChange={e => this.searchBarHandler(e)}></input>
      </div>
    )
  }
}