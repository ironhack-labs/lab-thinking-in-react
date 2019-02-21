import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar'

export default class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      checked: false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleTick = this.handleTick.bind(this)
  }

  handleSearch(searchValue) {
    this.setState({
      search: searchValue
    })
  }

  handleTick(checked) {

    this.setState({
      checked: checked
    })
  }

  render() {
    return (
      <div>
        <h1>Iron Store</h1>
        <SearchBar value={this.state.search} onSearch={this.handleSearch} onTick={this.handleTick} />
        <ProductTable product={this.props.products.data} search={this.state.search} checked={this.state.checked} />

        {/* {this.props.products.data.map(product => (
          <div>{product.name} {product.price}</div>
        )
        )} */}

      </div>
    )
  }
}