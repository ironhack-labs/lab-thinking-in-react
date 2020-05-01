import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className='component'>
                <h1>IronStore</h1>
                <SearchBar filter={this.props.filter} instock={this.props.instock}/>
                <ProductTable products={this.props.products}/>
            </div>
        )
    }
}
