import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
  };

  searchProduct = data => {
    const filteredProducts = this.props.products.data.filter(product => product.name.toLowerCase().includes(data.searchbar.toLowerCase()))
    this.setState({
      products: filteredProducts
    })
    
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>IronStore</h1>
        <Searchbar searchProduct={this.searchProduct}/>
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
