import React, { Component } from 'react';
import '../App.css';
// import SearchBar from './SearchBar';
// import ProductTable from './ProductTable';


class SearchBar extends Component {
    // state = {
    //   search:'',
    //   checked: ''
    // }

    handleChange = (e) => {
      console.log(e.target.value)
     
      //this.props.searchProducts('hi')//e.target.value)
  }

    handleCheckbox = (check) => {
      
      this.props.searchStockedProducts(check.target.checked)
    }

  render() {
    return (
      <div className="SearchBar">
       Search
      
          <input type="text" name="filter" onChange={(e) => this.handleChange(e)}></input>
          <br/>
          <input type="checkbox" name="stocked" onChange={(check) => this.handleCheckbox(check)} /> In Stock
       
      </div>
    );
  }
}

export default SearchBar;