import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  state = {
    currentList: [],
    searchList: []
  };

  handleSearch = evt => {
    let copy = this.props.products;
    let searchList = copy.filter(prod =>
      prod.name.toUpperCase().includes(evt.target.value.toUpperCase())
    );

    console.log(searchList);
    this.setState({ currentList: searchList });
  };

  componentDidMount() {
    this.setState({ currentList: this.props.products });
  }

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar clbk={this.handleSearch} />
        <ProductTable products={this.state.currentList} />
      </div>
    );
  }
}
