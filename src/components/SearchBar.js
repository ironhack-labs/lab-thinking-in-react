import React, { Component } from 'react';
import '../App.css';

export default class SearchBar extends Component {
    
    handleChange = (event) => {
        
       event.target.type === "checkbox" ? 
       this.props.setStocked () : this.props.setQuery(event.target.value) 
    }

    render() {
        return (
            <div >
                <form id="form">
                    <input 
                        id="searchBar"
                        placeholder="Search products..."
                        type="text"
                        name="query"
                        value={this.props.query}
                        onChange={this.handleChange}
                        />
                    <div>
                        <input
                            type="checkbox"
                            name="stocked"
                            checked={this.props.stocked}
                            onChange={this.handleChange}
                            />
                        <label htmlFor="stocked">Only show products in stock</label>
                    </div>
                </form>
            </div>
        )
    }
}
