import React, { Component } from 'react';
import Filter from './Filter';
import ListOfProduct from './ListOfProduct';

export default class IronStore extends Component {
  state = {
    currentProducts: this.props.products.data
  };

  filterProducts = (name, inStock) => {
    const filterByname = this.props.products.data.filter(p =>
      p.name.toUpperCase().includes(name.toUpperCase())
        ? p.name
        : console.log(p.name.toUpperCase())
    );
    console.log('byName', filterByname);
    const filterBystock = filterByname.filter(p => p.stocked === inStock);
    console.log('byStocl', filterBystock);
    this.setState({
      currentProducts: filterBystock
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <Filter clbk={this.filterProducts}></Filter>
        <ListOfProduct allProducts={this.state.currentProducts}></ListOfProduct>
      </div>
    );
  }
}
