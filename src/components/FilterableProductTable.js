import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';



export default class FilterableProductTable extends Component {

  state = {
    data: this.props.products.data,
    query: '',
    inStock: false,
  }
  
  setQuery = (query) => {
    const newProducts = this.props.products.data.filter(
      product => product.name.toLowerCase().includes(query.toLowerCase())
    );
    // console.log(query, newProducts);
    this.setState({
      query: query,
      data: newProducts
    })
  }

  setInStock = (inStock) => {
    let newProducts = this.props.products.data.filter(
      product => product.name.toLowerCase().includes(this.state.query.toLowerCase())
    );

    if (inStock === true) {
      newProducts = newProducts.filter(
        product => product.stocked === true
      );
    }
    
    console.log(this.state.query, inStock, newProducts);
    this.setState({
      inStock: inStock,
      data: newProducts
    })
  }

  
  render() {
    // console.log("filterable", this.props.products)

        return (
          <div>
            <SearchBar
              query={this.state.query}
              setQuery={this.setQuery}
              setInStock={this.setInStock}
              inStock={this.state.inStock}
            />
            <ProductTable 
                products={this.state.data}
                query={this.state.query}
            />
        </div>
        )
    }
}
