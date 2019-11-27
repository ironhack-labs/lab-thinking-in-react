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
    this.setState({
      currentList: searchList
    });
  };

  componentDidMount() {
    this.setState({
      currentList: this.props.products,
      searchList: this.props.content
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar clbk={evt => this.handleSearch(evt)} />
        <ProductTable products={this.state.currentList} />
      </div>
    );
  }
}
