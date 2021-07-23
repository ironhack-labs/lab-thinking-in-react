import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {

  state = {
    input: '',
    isChecked: false
  }

  handleInputChange = (event) => {
    this.setState ({
      input: event.target.value
    });

    this.props.filtered(this.state.input);
  }

  handleCheckbox = (event) => {
    console.log(event.target.checked);
    this.setState ({
      isChecked: event.target.checked
    });
    //this.props.checkStock(this.state.isChecked);
  }


  render() {
    return (
      <div className="search">
        <form className="search-form">
          <label>Search</label>
          <input className="search-input" type="text" name="search" value={this.state.input} onChange={this.handleInputChange}/>
        </form>
        
        <label>Only show products in stock</label>
        <input type="checkbox" name="check" value={this.state.isChecked} onChange={this.handleCheckbox}/>
        
      </div>  
    )
  }
}

export default SearchBar;