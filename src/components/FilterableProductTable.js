import React, { Component } from 'react'
import ProductRow from './ProductRow'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default class FilterableProductTable extends Component {

    state = {
        products: this.props.products,
        query: "",
        stocked: true,
        id: ""
    }
    setStocked = () => {
        this.setState( (state) => ({
            stocked: !state.stocked
        }))
    }
    setQuery = queryParam => {
        this.setState({
          query: queryParam
        })
      }

    render() {
        return (
            <>
            <div className="App-header">
            <h1>IronStore</h1>
            <SearchBar  
                query={this.state.query}
                stocked={this.state.stocked}
                setQuery={this.setQuery} 
                setStocked={this.setStocked}
            />
            </div>
            <ProductTable 
                products={this.state.products}
                query={this.state.query}
                stocked={this.state.stocked}
                //id={this.state.id}
            />  
            </>
        )
    }
}
