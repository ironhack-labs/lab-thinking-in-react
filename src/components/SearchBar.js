import React, { Component } from 'react'

export default class SearchBar extends Component {


    updateQuery = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;   
        this.props.setQuery(event.target.name, value)
    }

    render() {
        return (
            <div class="columns ">
                <h4>Search</h4>
                <form onChange={this.updateQuery}>
                    <input class="input" type="text" name="searchQuery" value={this.props.searchQuery} value={this.props.query} />
                    <label class="label" htmlFor="onlyInStock">Only show in stock items</label>
                    <input class="checkbox" type="checkbox" name="onlyInStock" checked={this.props.onlyInStock}/>
                </form>
            </div>
        )
    }
}
