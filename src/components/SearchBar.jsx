import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        // product : this.props.products,
        searchInput : "",
        inStock: false,
    }   

    handleChange = (evt) =>{ 
        const value = evt.target.value;
        const name = evt.target.name;
        this.setState({
          [name]: value,        
        });
        this.props.handleSearch(value);
    }

    handleChecked = (evt) =>{
        const value =  evt.target.checked;
        const name = evt.target.name;
        this.setState({
          [name]: value,
           inStock: !this.state.inStock,
        });
        console.log(this.state)
        this.props.handleSearch(value);
    }

    render() {
       
        return (
            <div>  
                
                <h4>Search</h4>

                <input type="text" name="searchInput" onChange={this.handleChange} value={this.state.searchInput}/>
                <input type="checkbox" name="inStock" onChange={this.handleChecked} checked={this.state.inStock}></input>
                <label>Only show products on stock</label>
            </div>
        )
    }
}