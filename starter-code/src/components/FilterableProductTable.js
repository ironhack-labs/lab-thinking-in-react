import React from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component {
  state = {
    search: '',
    data: this.props.products,
    show: false
  };

  updateSearchText = text => {
    this.setState(
      {
        search: text
      },
      () => {
        this.setState({
          data: this.props.products.filter(product => {
            return product.name
              .toLowerCase()
              .includes(this.state.search.toLowerCase());
          })
        });
      }
    );
  };

  updateCheckbox = check => {
    console.log(check);
    this.setState(
      {
        show: check
      },
      () => {
        this.setState({
          data: this.props.products.filter(product => {
            if (this.state.show === true) {
              return product.stocked === true;
            } else {
              return product;
            }
          })
        });
      }
    );
  };
  render() {
    return (
      <div>
        <h1>IronStore</h1>

        <SearchBar
          name="search"
          search={this.state.search}
          updateSearchText={this.updateSearchText}
          updateCheckbox={this.updateCheckbox}
          show={this.state.show}
        />
        <ProductTable
          data={this.state.data}
          search={this.state.search}
          show={this.state.show}
        />
      </div>
    );
  }
}
