import React, { Component } from 'react'
import data from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {

    state = {
        itemData: data
    }

    filterHandler = (targetValue) => {
        let filterList = data.filter(input => {
            return input.name.toUpperCase().startsWith(targetValue.toUpperCase())
            // return input.stocked
        })
        
        if(targetValue === "") {
           this.setState({itemData: data})
        } else 
        this.setState({itemData: filterList})
    }


    render() {
        return (
            <div>
                <h1>IronStore</h1>

                <SearchBar filterItem={this.filterHandler} />

                <ProductTable products={this.state.itemData} />

            </div>
        )
    }
}
