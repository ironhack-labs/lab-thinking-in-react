import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.products,
      query: '',
      checked: false
    };
    this.search = this.search.bind(this);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
  }
  search(value) {
    this.setState({
      query: value
    });
  }

  toggleCheckBox(value) {
    this.setState({
      checked: value
    });
  }
  get checkBox() {
    const checked = this.state.checked;
    const data = this.state.data;
    return checked ? data.filter(data => data.stocked === checked) : data;
  }

  get FilteredProducts() {
    const query = this.state.query;
    return this.checkBox.filter(product =>
      product.name.toLowerCase().includes(query.toLocaleLowerCase())
    );
  }

  render() {
    return (
      <div>
        <SearchBar
          query={this.state.query}
          checked={this.state.checked}
          search={this.search}
          toggleCheckBox={this.toggleCheckBox}
        />
        <ProductTable products={this.FilteredProducts} />
      </div>
    );
  }
}
