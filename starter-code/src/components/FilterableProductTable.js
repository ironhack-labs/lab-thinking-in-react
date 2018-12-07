import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import data from '../data.json'

const newJSON = {}
data.data.forEach(e => {
    if (newJSON[e.category]) {
        newJSON[e.category].push(e);
    }
    else {
        newJSON[e.category] = [e]
    }
});

export default class FilterableProductTable extends Component {
    constructor(){
     super();
     this.state = {newJSON: newJSON}
    }
    searchInput = (event) => {

     
        let searchArray = this.state.newJSON.Electronics.filter(word => {
            return word.name.toLowerCase().includes(event.toLowerCase())
        });

        this.setState({
            newJSON: searchArray,
            search: event,
        })
        console.log(searchArray)
    }

    
    render() {   
        return (
            <div>
                <SearchBar  searchInput={this.searchInput} {...this.state.newJSON}></SearchBar>
                <ProductTable {...this.state.newJSON}></ProductTable>
            </div>
        )
    }
}
