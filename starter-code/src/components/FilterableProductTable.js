import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.products.data,
      filtered: this.props.products.data,
      checkBox: false,
      searchString: ""
    };
  }

  searchProducts() {
    let search = this.state.searchString
    let dataSearch = [...this.state.filtered];
    let filteredData = dataSearch.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()));
    if (this.state.checkBox) {
        filteredData = filteredData.filter(item => item.stocked)
    }  
      this.setState({
        ...this.state,
        data: filteredData
      });
    
  }

  checkStock(e) {
    this.setState({
      ...this.state,
      checkBox: !this.state.checkBox
    }
    ,()=>this.searchProducts());
  }

  checkSearch(e) {
    this.setState({
      ...this.state,
      searchString: e.target.value
    }
    ,()=>this.searchProducts());
  }


  render() {
    return (
      <div>
        <SearchBar
          search={e => this.checkSearch(e)}
          checkStock={e => this.checkStock(e)}
        />
        <ProductTable products={this.state.data} />
      </div>
    );
  }
}
