import React, { Component } from 'react';
import '../App.css';
// import SearchBar from './SearchBar';
// import ProductTable from './ProductTable';


class SearchBar extends Component {
    state = {
      search:''
    }

    handleChange = (e) => {
      console.log(e.target.value)
      // this.setState({
      //     search:e.target.value
      // })
      this.props.searchProducts(e.target.value)
  }

  render() {
    return (
      <div className="SearchBar">
       Search
      
          <input type="text" name="filter" onChange={(e) => this.handleChange(e)}></input>
       
      </div>
    );
  }
}

export default SearchBar;