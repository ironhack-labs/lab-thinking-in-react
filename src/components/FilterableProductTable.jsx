import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProduct extends React.Component {

  render() {
    return(
      <div>
        <SearchBar/>
        <ProductTable products={this.props} />
      </div>
      )
  }
  
}

export default FilterableProduct