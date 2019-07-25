import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
  constructor(props){
    super(props)

    this.state = {
      filteredList: [...props.products.data]
    }
  }

  filterProduct(word){
    const newList = [...this.props.products.data].filter((element) => {
      return element.name.includes(word) 
    })
    this.setState({
      filteredList: newList
    })
  }

  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar filterProduct = {(word) => this.filterProduct(word)}></SearchBar>

        {
          <ProductTable productsData = { this.state.filteredList }> </ProductTable> 
        }

      </div>
    );
  }
}

export default FilterableProductTable;
