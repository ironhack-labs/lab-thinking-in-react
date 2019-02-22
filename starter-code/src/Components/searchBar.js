import React from 'react';

export default class SearchBar extends React.Component {

  state = {
    name: '',
    checked: false
  }

  searchBarHandler = (e) => {
    this.props.searchFunctionProp(e.target.value, this.state.checked)
  }

  checkboxHandler = () => {

    let newState = { ...this.state }
    if (this.state.checked) newState.checked = false;
    else newState.checked = true;
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <input type="text" onChange={e => this.searchBarHandler(e)}></input>
        <input type="checkbox" name="checkbox" onClick={this.checkboxHandler}></input>
        <label htmlFor="checkbox">Only show products in stock</label>
      </div>
    )
  }
}