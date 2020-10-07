import React, { Component } from 'react';

export default class Searchbar extends Component {
  state= {
    searchbar: ''
  }

  handleChange = e => {
    console.log(e.target)
    const { name, value } = e.target
    console.log('name, value in sb 1st', name, value)
    this.setState({
      [name]: value
    }, () => this.props.searchProduct(this.state)) 
  }

  render() {
    console.log('state 3step', this.state.searchbar)
    return (
      <div>
        <form>
          <input type="text" name="searchbar" onChange={this.handleChange} value={this.state.searchbar}/>
          {/*<input type="checkbox" name="stock" />
          <label>Only show products on stock</label>*/}
        </form>
      </div>
    );
  }
}
