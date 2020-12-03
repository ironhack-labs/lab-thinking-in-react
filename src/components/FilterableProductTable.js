import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
// import SearchBar from './components/SearchBar';
// import ProductTable from './components/ProductTable';
// import moduleName from 'module'

export default class FilterableProductTable extends Component {
    
    state = {
        data : this.props.products,
        query:''
    }

    setQuery = query => {
        this.setState({
            query: query
        })
    }


    render() {
        return (
            // <h1>Hello</h1>
        <div>
            <SearchBar 
            query={this.state.query}
            setQuery={this.setQuery}
            />
            <ProductTable filterableproducts={this.state.data}/>
        </div>
        )
    }
}
