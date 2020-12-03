import React, { Component } from 'react'

export default class SearchBar extends Component {


    handleChange = event => {
        this.props.setQuery(event.target.value)
    }
    handleCheckboxChange = event => {
        console.log(this.props)
        this.props.setStock()
    }


    render() {
        return (
            <div>
                <div>
                <h2>Search</h2>
                <input
                    type="text"
                    name="query"
                    value={this.props.query}
                    onChange={this.handleChange}
                 />
                </div>
                <input 
                type="checkbox" 
                name="inStock"
                value={this.props.inStock}
                onChange = {this.handleCheckboxChange}    
                />  
                 <label htmlFor="inStock">Leave for the bonus</label>        
            </div>
        )
    }
}
