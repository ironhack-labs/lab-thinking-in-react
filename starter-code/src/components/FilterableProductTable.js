import React, { Component } from "react"

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


class FilterableProductTable extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: props.products,
      filteredProducts: []
    }
  }



  isfilterProducts = product => {
    let filteredProductsCopy = [...this.state.filteredProducts]

    filteredProductsCopy = this.state.products.filter(elem => elem.name.toLowerCase().includes(product.toLowerCase()))

    this.setState({ filteredProducts: filteredProductsCopy })
  }

  render() {

    return (

      <div>
        <SearchBar filter={this.isfilterProducts} />

        {
          this.state.filteredProducts.length ? <ProductTable products={this.state.filteredProducts} /> : <ProductTable products={this.state.products} />
          // <ProductTable products={this.state.filteredProducts} />
        }

      </div>

    )
  }

}
export default FilterableProductTable

