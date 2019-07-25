import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


export class FilterableProductTable extends Component {
  state = {
    data: this.props.products,
    search: '',
    filteredList: this.props.products,
  }

  searchHandler = (event) => {
    const {value} = event.target
    const updatedList = [...this.state.data].filter(element => element.name.includes(value))

    this.setState({
      filteredList: updatedList,
      search: value
    })
  }

  render() {
    return (
      <div>
        <h1>Ironstore</h1>
        <SearchBar searchWord={this.searchHandler}/>
        <ProductTable products={this.state.filteredList}/>
      </div>
    )
  }
}

export default FilterableProductTable
