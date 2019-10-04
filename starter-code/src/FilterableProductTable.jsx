import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.products.data,
      stocked: '',
      checkbox: false
    };
  }
  updateSearch(e) {
    this.filteredFuction(e.target.value);

    // let productsSearch = [...this.props.products.data];
    // productsSearch = productsSearch.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
    // // console.log(productsSearch)
    // this.setState({
    //   ...this.state,
    //   data: productsSearch
    // });
  }

  filteredFuction(searchBar) {
    let productsSearch = [...this.props.products.data];
    let stockedProducts = productsSearch.filter(el => el.stocked)
    if (this.state.checkbox) {
      if (!!searchBar) {
        stockedProducts = stockedProducts.filter(
          product =>
            product.name.toLowerCase().includes(searchBar.toLowerCase())
        );
      }
    } else {
      if(!!searchBar) {
        productsSearch = productsSearch.filter(product =>
          product.name.toLowerCase().includes(searchBar.toLowerCase())
        );
      }
    }

    console.log(stockedProducts)
    this.setState({
      ...this.state,
      data: productsSearch,
      stocked: stockedProducts
    });
  }

  updateCheckbox() {
    this.setState({ ...this.state, checkbox: !this.state.checkbox }, () => {
      this.filteredFuction();
    });
  
  }
  render() {
    return (
      <div className="filterable">
        <SearchBar
          updateSearchFormData={e => this.updateSearch(e)}
          updateCheckbox={e => this.updateCheckbox(e)}
        ></SearchBar>
        <ProductTable 
        checkedBox={this.state.checkbox}
        stockedProducts={this.state.stocked}
        products={this.state.data}></ProductTable>
      </div>
    );
  }
}
