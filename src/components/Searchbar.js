import React from 'react';
import Productable from './Productable';
import products from '../data.json';

class Searchbar extends React.Component {
  state = {
    allProducts: products.data,
    search: '',
    name: '',
    price: '',
    stocked: false,
  };

  render() {
    console.log(this.state.allProducts);
    const filteredProducts = this.state.allProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        product.price.toLowerCase().includes(this.state.search.toLowerCase())
      );
    });

    return (
      <input
        onChange={this.props.setSearch}
        style={{ width: '80%' }}
        type="text"
        name="product"
        placeholder="Search your product here"
      ></input>
    );
  }
}

export default Searchbar;
