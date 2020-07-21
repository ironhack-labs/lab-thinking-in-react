import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <form className='p-4'>
                <label className=''>Search</label><br />
                <input
                    className='d-block w-100' 
                    type='text' 
                    name='search' 
                    placeholder='Introduce the name of a product' 
                    onChange={this.props.handleChange}
                    value={this.props.value}
                /><br />
                <input 
                    type='checkbox'
                    onChange={this.props.handleChange} 
                />
                <label>Only show products on stock</label>
            </form>
        )
    }
}

export default SearchBar
