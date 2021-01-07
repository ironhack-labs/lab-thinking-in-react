import React, { Component } from 'react';
import ProducTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    searchValue: '',
  };

  handleSearch = (event) => {
    const getTheValue = event.target.value;

    this.setState({
      searchValue: getTheValue,
      products: [...this.props.products, getTheValue],
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar handleSearch={this.handleSearch} />
        {/* {console.log(this.props.products)} */}
        <ProducTable products={this.state.products} />

        {/* Verivier la ligne 28 */}
      </div>
    );
  }
}

export default FilterableProductTable;
