import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default class FilterableProductTable extends Component {
    
    state = {
        products: this.props.product,
        query: ''
    }

    setQuery = (queryContent) => {
        console.log(queryContent)
        this.setState({
            
            query: queryContent
        })
        console.log(this.state.query)
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>

                <SearchBar 
                query={ this.state.query }
                setQuery= { this.setQuery }

                />
                <ProductTable 
                product={ this.state.products }
                query={ this.state.query }    
                />
            </div>
        )
    }
}
