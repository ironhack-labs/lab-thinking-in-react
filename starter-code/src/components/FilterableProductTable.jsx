import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import products from './data.json';

export default class FilterableProductTable extends Component {
  state = {
    products: products.data,
    search:""
  };

  filter = e => {
    this.setState({ search: e.target.value });
    // let filteredStuff = this.state.foods.filter(food=> food.name.toUpperCase().match(e.target.value.toUpperCase()))
    // this.setState({filteredStuff:filteredStuff})
  };


  filterArr = () => {
    let filteredStuff = this.state.products.filter(product =>
      product.name.toUpperCase().match(this.state.search.toUpperCase())
    );
    return filteredStuff;
  };


  render() {
    let filteredStuff = this.filterArr().map((products, index) => {
      return <ProductTable key={index} products={products} />;
    });

    return (
      <div>
        <SearchBar handleChange={this.filter}/>
        {filteredStuff}
      </div>
    );
  }
}
