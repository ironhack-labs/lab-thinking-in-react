import React, { Component } from 'react'
import './../styles/FilterableProductTable.css'
import MyProductTable from './MyProductTable'
import MySearchBar from './MySearchBar'
import data from "../data.json"

export default class FilterableProductTable extends Component {

    state={
        items: data.data,
        search:""
      }

    filter = (e) => {
    // here, updating state.search to what has been input
    this.setState({search:e.target.value })
    }

    filterArr = () => {
        let filteredItems = this.state.items.filter(item=>item.name.toUpperCase().match(this.state.search.toUpperCase()))
        return filteredItems
      }

    render() {
        return (
            <div className="wholePage">
                <MySearchBar handleChange={this.filter} ></MySearchBar>
                <MyProductTable items={this.filterArr()}newClass='' ></MyProductTable>
            </div>
        )
    }
}
