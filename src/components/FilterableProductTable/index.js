import React, {Component} from 'react'

import ProducTable from './ProductTable'
import SearchBar from './SearchBar'

import  products from '../../data.json'

class FilterableProductTable extends Component {
    constructor (){
        super ()
        this.state = {
            products: products.data,
            productsFiltered: products.data
        }
    }

    filterProducts = word => {
        const productsCopy = [...this.state.products]
        const productsCopyFiltered = productsCopy.filter(elm => elm.name.toLowerCase().includes(word.toLowerCase()))
        this.setState({productsFiltered: productsCopyFiltered})
    }

    render () {
        return (
            <main> 
                <h1>IronStore</h1>
                <SearchBar filterProducts={this.filterProducts}/>
                <ProducTable productsFiltered={this.state.productsFiltered} />
            </main>
        )
    }
}

export default FilterableProductTable