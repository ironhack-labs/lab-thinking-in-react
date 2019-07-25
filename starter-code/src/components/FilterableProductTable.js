import React, { Component, Fragment } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      products: [...this.props.products.data],
      filteredProducts: [...this.props.products.data],
    }
  }

  changeHandler(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    })
    this.searchHandler(value)
  }

  searchHandler(str) {
    let showList = [...this.state.products];
    this.setState({
      filteredProducts: showList
    })
    let filter = showList.filter(e => {
      if (e.name.toLowerCase().includes(str.toLowerCase()))
      return e;
    });
    this.setState({
      filteredProducts: filter
    })
  }

  render() {
    return(
      <Fragment>
        <h1>IronStore</h1>
        <SearchBar searchBar={this.state.search} searchChange={(event) => this.changeHandler(event)} />
        <ProductTable productsData={this.state.filteredProducts} />
      </Fragment>
    )
  }
}

export default FilterableProductTable;