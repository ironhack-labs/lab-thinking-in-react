import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div>
                <h2>Search</h2>
                <form>
                    <input type='text' name="search" />

                    <input type="checkbox" name="stock" value="stock" />
                    <label for="stock"> Only show products in stock</label>
                </form>

            </div>
        )
    }
}

export default SearchBar
