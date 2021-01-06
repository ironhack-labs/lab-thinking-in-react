import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

export default class FilterableProductTable extends Component {

 
state = {
  products: this.props.products,
  searchValue: ""
}

searchProduct = (evt) => {
const valueSearched = evt.target.value

  this.setState({
    searchValue: valueSearched,
    products: [...this.state.products, valueSearched]
  });
};



  render() {
    console.log(this.state.searchValue)
    return (
      <div>
        <h1>IronStore</h1>
        {console.log(this.props.products)}
        <SearchBar
        // onChange={() => this.searchProduct(this.state.searchValue)}/>
        onChange={this.searchProduct(this.state.searchValue)}
        />
        <ProductTable products={this.state.products}/>
      </div>
    );
  }
}
