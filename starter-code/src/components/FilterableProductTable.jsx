import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  
  state = {searchInput: ""};

  searchHandler = (event) => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    return (
    <div> 
<h1>IronStore</h1>
    <SearchBar searchHandler={this.searchHandler}/>
    <ProductTable product={this.props.products} searchValue={this.state.searchInput}/>
 
    </div>
    )
  }
}

export default FilterableProductTable;