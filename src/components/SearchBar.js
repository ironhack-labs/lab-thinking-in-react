import React, { Component } from 'react'

export class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state ={
            searchInput: ''
        }
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({
            searchInput: value
        })
        this.props.filterItems(value)
    }

    render() {
        return (
            <div>
                <h2>Search</h2>
                <form>
                    <input type='text' name="search" value={this.state.searchInput} onChange={this.handleChange}/>

                    <input type="checkbox" name="stock" value="stock" />
                    <label for="stock"> Only show products in stock</label>
                </form>

            </div>
        )
    }
}

export default SearchBar
