import React from 'react'

import Search from "./Search"
import Table from './Table';

import data from "../../../data.json"

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          products : data.data,
          search: {
              query : "",
              checked: false
          }
        }

        this._handleSearchQuery = this._handleSearchQuery.bind(this)
        this._handleCheckBox = this._handleCheckBox.bind(this)

      }

    render() {
        return (
            <div className="container">
                <h1>Product List</h1>
                <Search 
                search={this.state.search.query}
                checked={this.state.search.checked}
                handleCheckBox={this._handleCheckBox}
                handleSearchQuery={this._handleSearchQuery} />
                <Table
                checked={this.state.search.checked}
                filter={this.state.search.query}
                products={this.state.products}/>
            </div>
        )
    }

    _handleSearchQuery(event) {
        this.setState({
           search : {
               query: event.target.value ,
               checked: this.state.checked
           }
        })
    }

    _handleCheckBox(event) {
        this.setState({
            search : {
                query: this.state.search.query,
                checked: event.target.checked
            }
        })
    }
}

export default ProductTable