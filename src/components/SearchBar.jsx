import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        // product : this.props.products,
        searchInput : "",
    }

    handleChange = (evt) =>{
        const value = evt.target.value;
        const name = evt.target.name;
        this.setState({
          [name]: value,
        });
      
        this.props.handleSearch(value);

    }

    render() {
       
        return (
            <div>  
                <h4>Search</h4>

                <input type="text" name="searchInput" onChange={this.handleChange} value={this.state.searchInput}/>
                <input type="checkbox"></input>
                <label>Only show products on stock</label>
            </div>
        )
    }
}