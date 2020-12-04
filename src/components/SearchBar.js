import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <form>
                <input type="text" placeholder="Search..." onChange={this.props.onSearch}/><br/>
                <input type="checkbox" name="inStock"/>
                <label htmlFor="checked">Only show products in stock</label>
                </form>
            </div>
        )
    }
}