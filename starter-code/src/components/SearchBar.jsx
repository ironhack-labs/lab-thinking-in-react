import React, {Component} from 'react';

export default class SearchBar extends Component {
  
  state = {
    search : "",
    stocked: false
  }

  onChangeHandler = e => {
    const newState = {...this.state}
    newState.search = e.target.value
    this.setState(newState)
    this.props.funtionFilter (newState.search, this.state.stocked)
  };

  stockHandler = () => {
    const newState = {...this.state}
    newState.stocked = !newState.stocked 
    this.setState(newState)
    this.props.funtionFilter (this.state.search, newState.stocked)
  }

  render () {
    return (
      <div className="labelContainer">
        <label>Search</label>
        <input
          className="inputClass"
          onChange={this.onChangeHandler}
          type="text"
        />
        <input onClick={this.stockHandler} type="checkbox" />Only show products on stock
      </div>
    );
  }
}
