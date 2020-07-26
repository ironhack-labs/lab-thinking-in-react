import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    render() {
        console.log("props FilteredTable: ", this.props.products)


        return (
            <div>
                <div className="table">
                    <h1>IronStore</h1>
                    <SearchBar products={this.props.products}/>
                    <div>
                        <ProductTable products={this.props.products}/>
                    </div>
                </div>
            </div>
        )
    }
}
