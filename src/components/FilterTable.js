import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filter: ""
        }
    }
    
    filter = text => {
        this.setState({filter: text})
    }
    
    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar callback={this.filter} />
                <ProductTable data={this.props.products.data} filter={this.state.filter} />
            </div>
        )
    }
}
