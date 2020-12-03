import React, { Component } from 'react'
import SearchBar from '../searchBar/SearchBar'
import ProductTable from '../productTable/ProductTable'


import data from '../../data.json'

class FilterableProductTable extends Component{
    
    constructor(){
        super()
        this.state = {
            products:data.data
        }
    }


    handleChange = (e) => {
        const { value } = e.target
        let newData = data.products.filter(elm => elm.name.toLowerCase().includes(value.toLowerCase()))
        this.setState({products: newData})
    }

    render() {
        return (
        
            <>
                <header>
                    <h1>IronStore</h1>

                    <SearchBar handleChange={this.handleChange} />
                </header>

                <main><ProductTable handleChange={this.handleChange} /></main>
            </>
        )
    }
}

export default FilterableProductTable


