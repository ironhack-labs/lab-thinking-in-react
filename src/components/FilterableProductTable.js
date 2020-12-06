import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
// import SearchBar from './components/SearchBar';
// import ProductTable from './components/ProductTable';
// import moduleName from 'module'

export default class FilterableProductTable extends Component {
    // initial state, data from App.js
    state = {
        data : this.props.products,
        query:'',
        inStock: false
    }

    handleInStock = e => {
        console.log(e.target.checked)
        const filteredProduct = this.state.data.filter(product => {
            if(e.target.checked)
            return product.stocked
            else 
            return product
        }) 
        this.setState({
            inStock: e.target.checked,
            data: filteredProduct
        })
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    setQuery = query => {
        this.setState({
            query: query
        })
    }


    render() {
        // const filteredProduct = data.filter(product => {
        //     return 
        // })
        console.log(this.state.data)
        return (
            
        <div className="filterable-table">
            <SearchBar 
            query={this.state.query}
            setQuery={this.setQuery}
            />

        <form onSubmit={this.handleSubmit}>
            <label htmlFor="inStock">
                <input
                id="inStock"
                name="inStock"
                type="checkbox"
                value={this.state.stocked}
                onChange={this.handleInStock}
                />
                Only show products on stock
                </label>
        </form>

            <ProductTable 
                products={this.state.data}
                query={this.state.query}
            />
        </div>
        )
    }
}
