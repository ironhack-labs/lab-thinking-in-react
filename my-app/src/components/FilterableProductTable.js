import Table from './ProductTable'
import SearchBar from './searchbar'
import React, { Component } from 'react'
import data from './../data.json'

class FilterableProductTable extends Component {

    constructor() {

        super()
        this.state = {
            text: '',
            items: data.data
        }
    }
    filterr(text) {

        const products = this.state.items

        const newData = products.filter(function (item) {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })

        this.setState({
            items: newData,
            text: text,
        })
    }
    render() {
    return (
        <div className="App">
            <h1>IronStore</h1>
            <SearchBar filter={(text)=>this.filterr(text)}></SearchBar>
            <Table data={this.state.items} />
        </div>
    );}
}

export default FilterableProductTable ;