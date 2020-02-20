import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      query: '',
      checkStatus: false
    };
  }

  INIT_DATA = this.props.products;

  componentDidMount() {
    this.setState({
      products: this.INIT_DATA.data
    });
  }

  updateSearchText = searchQuery => {
    // set
    this.setState({
      query: searchQuery
    });
  };
  updateCheckStatus = status => {
    this.setState({
      checkStatus: status
    });
  };

  render() {
    console.log(this.state.query);
    return (
      <>
        <SearchBar
          updateSearchText={this.updateSearchText}
          updateCheckStatus={this.updateCheckStatus}
          checkStatus={this.state.checkStatus}
          
          search={this.state.query}
        />
        <ProductTable
          products={this.state.products}
          search={this.state.query}
          checkStatus={this.state.checkStatus}
        />
      </>
    );
  }
}
