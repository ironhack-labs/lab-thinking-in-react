import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import '../../src/App.css';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.allProductList = this.props.products.data;
    this.state = {
      ProductList: this.allProductList,
      showProducts: false,
      search: ''
    };
    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  checkboxHandler(event) {
    let { name, value, type, checked } = event.target;
    let listCopy = [...this.allProductList];
    let filterList;
    value = type === 'checkbox' ? checked : value;
    if (checked) filterList = listCopy.filter(item => item.stocked === value);
    else filterList = listCopy;

    if(this.state.search !== ''){
    filterList = filterList.filter(item => {
      let nameLower = item.name.toLowerCase();
      return nameLower.includes(this.state.search.toLowerCase());      
    });
  }
    this.setState({
      [name]: value,
      ProductList: filterList
    });
  }

  searchHandler(event) {
    let { value } = event.target;
    let listCopy = [...this.allProductList];
    let filterList = listCopy.filter(item => {
      let nameLower = item.name.toLowerCase();
      return nameLower.includes(value.toLowerCase());
    });
    if (this.state.showProducts) filterList = filterList.filter(item => item.stocked === true);
    // else filterList = listCopy;

    this.setState({
      search: value,
      ProductList: filterList
    });
  }

  render() {
    return (
      <>
        <h1 className="title is-1">IronStore</h1>
        <SearchBar
          showProducts={this.state.showProducts}
          searchValue={this.state.search}
          handleChange={this.checkboxHandler}
          handleSearch={this.searchHandler}
        />
        <ProductTable productList={this.state.ProductList} />
      </>
    );
  }
}
export default FilterableProductTable;
