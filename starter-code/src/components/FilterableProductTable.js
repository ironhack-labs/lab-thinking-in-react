import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends React.Component {
  state = {
    query: "",
    stock: false,
  }

  setQuery = query => {
    this.setState({
      query
    })
  }

  setStock = stock => {
    this.setState({
      stock
    })
  }

  render() {
    console.log('stock' + this.state.stock)
    return (
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <SearchBar
          changeQuery={this.setQuery}
          //query={this.state.query}
          changeStock={this.setStock}
        //stock={this.state.stock}
        />
        <ProductTable 
        query={this.state.query}
        stock={this.state.stock}
        />
      </div>
    )
  }
}


export default FilterableProductTable
