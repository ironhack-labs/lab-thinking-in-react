import React, { Component } from 'react'
import '../App.css'

export class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state ={
            searchInput: '',
            inStock: false
        }
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({
            searchInput: value,
        })
        this.props.filterItems(value)
    }

    handleCheckBox = () => {
        this.setState({
            inStock: !this.state.inStock
        })
        this.props.showInStock(this.state.inStock)
    }

    render() {
        return (
            <div className='searchBar' >
                <h2>Search</h2>
                <form>
                    <input type='text' name="search" value={this.state.searchInput} onChange={this.handleChange}/>
                    <div>
                        <input type="checkbox" name="stock" value={this.state.inStock} onChange={this.handleCheckBox}/>
                        <label htmlFor="stock"> Only show products in stock</label>
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar
