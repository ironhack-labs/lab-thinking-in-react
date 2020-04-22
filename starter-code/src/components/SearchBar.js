import React, { Component } from 'react';
import '../App.css';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      products: this.props.products}
  }

  handleInput = (e) => {
    this.setState({
      value: e.currentTarget.value,
    })
    const { searched } = this.props;
    searched(e.currentTarget.value)
  }

  handleCheck = (e) => {
    const {checkboxed} = this.props;
    checkboxed(e.currentTarget.checked);
  }
  
  render () {
    const {value, checkbox} = this.state;
    return(
    <div className="SearchBar">
      <p>Search</p>
      <input 
      className='StyleRound'
      type="text"
      name='value'
      value={value}
      onChange={this.handleInput}
      />
      <div>
        <input
        className='CheckBox'
        type="checkbox"
        name='checkbox'
        value={checkbox}
        onChange = {this.handleCheck}
        />
        <label>Only show products on stock</label>
      </div>
      {this.props.products}
    </div>)
  }
}

export default SearchBar; 