import React, {Component} from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends Component {

  state = {
    products: this.props.products.data,
    query: ''
  }

  setQuery = query => {
    this.setState({
      query: query
    })
  }

  render() {
      console.log(this.state.query)
       const filteredProducts = this.state.products.filter(product=>
        product.name.toLowerCase().includes(this.state.query.toLowerCase()))
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar query={this.state.query} setQuery={this.setQuery} />
        {this.state.products.length === 0 && <h2>No Products to display</h2>}
        <div  className="table">
          <table>
            <thead>
              <tr>
              <th>Name</th>
              <th>Price</th>
              </tr>
            </thead>
            <ProductTable products={filteredProducts} />
      </table>
      </div>
      </div>
    )
  }
}

export default FilterableProductTable;
 