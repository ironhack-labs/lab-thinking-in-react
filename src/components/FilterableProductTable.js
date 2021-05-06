import React from 'react'
import { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends Component {

    constructor(props) {
    super(props)
    
    const productListCopy = JSON.parse(JSON.stringify(this.props.products))
    
    this.state = {
      products: productListCopy
    }
  }

    filterProduct(query) {
        const filteredProduct = this.props.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
        console.log(filteredProduct)
        this.setState({products: filteredProduct })
        console.log(this.props.products)
    }

    render() {
        return(
            <>
                {<SearchBar filterProduct={query => this.filterProduct(query)}/>}
                <ProductTable products={ this.props.products }/>
            </>
        )
    }
        
}

export default FilterableProductTable