import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ProductRow from '../components/ProductRow';
import ProductTable from '../components/ProductTable';
import data from '../data.json';

export default class FilterableProductTable extends Component {
  state = {
    productsList: data.data
  };
  searchHandler = search => {
    search
      ? this.setState({
          productsList: this.state.productsList.filter(p =>
            p.name.toLowerCase().startsWith(search.toLowerCase())
          )
        })
      : this.setState({
          productsList: data.data
        });
  };
  checkHandler = () => {
    if (this.state.productsList === data.data) {
      this.setState({
        productsList: this.state.productsList.filter(p => p.stocked)
      });
    } else {
      this.setState({
        productsList: data.data
      });
    }
  };
  render() {
    return (
      <>
        <hr />
        <SearchBar
          onStockFilter={() => this.checkHandler()}
          searchFilter={e => this.searchHandler(e.target.value)}
        />
        <hr />
        <ProductTable>
          {this.state.productsList.map((product, i) => (
            <ProductRow
              key={i}
              onStock={product.stocked}
              price={product.price}
              name={product.name}
            />
          ))}
        </ProductTable>
      </>
    );
  }
}
