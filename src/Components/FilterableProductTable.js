import React, { Component } from 'react'
import data from '../data.json'
import Searchbar from "./SearchBar"
import ProductTable from "./ProductTable"


    class FilterableProductTable extends Component {
        state = {
            data: data,
            query: ''
        };

        setQuery = query => {
            this.setState({
                query:query
            })
        }

        render() {
            return (
                <div>
                    <h1> IronStore </h1>
                    <Searchbar query={this.state.query} setQuery={this.setQuery} />
                    <ProductTable data={this.state.data} query={this.state.query} />
                </div>
            )
        }


    }
    



export default FilterableProductTable;