import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search">
                <input type="text" name="search" id="search" value={this.props.query} onChange={(e) => {this.props.handleSearch(e.target.value)}} placeholder="Search by name"/>
                <div className="checkbox">
                    <label htmlFor="stock">Only show products in stock</label>
                    <input type="checkbox" name="stock" id="stock" checked={this.props.stock} onChange={(e) => {this.props.handleStock(e.target.checked)}}/>
                </div>
            </div>
        )
    }
}
