import React from 'react'

import Search from "./Search"
import Table from './Table';

import data from "../../../data.json"

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          products : data.data,
          search: ""
        }

        this._handleSearchQuery = this._handleSearchQuery.bind(this)
      }

    render() {
        return (
            <div className="container">
                <h1>List</h1>
                <Search 
                search={this.state.search}
                handleSearchQuery={this._handleSearchQuery} />
                <Table
                filter={this.state.search}
                products={this.state.products}/>
            </div>
        )
    }

    _handleSearchQuery(event) {
        this.setState({
           search : event.target.value 
        })
    }
}

export default ProductTable