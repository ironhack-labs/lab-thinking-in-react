import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'



class FilterableProductTable extends React.Component {
  state = {
    products: this.props.products,
  }

  handleSearch = (text) => {
    this.setState({
      products: this.props.products.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    })
  }

  handleFilter = (bool) => {
    this.setState({
      products: bool ? this.props.products : this.props.products.filter(item => item.stocked === true)
    })
  }


  render() {
    
    return (
    <div>
      <SearchBar handleSearch={this.handleSearch} handleFilter={this.handleFilter}/>
      <ProductTable products={this.state.products}/>
    </div>
    )
  }
}

export default FilterableProductTable