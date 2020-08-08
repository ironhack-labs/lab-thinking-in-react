import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props){
        super(props)
        this.search= this.search.bind(this)
    }
  
    search(e){
        console.log(e.target.value)
        this.props.callbackFunction(e.target.value)

    }

    render() {
        
        return (
            <div className="searchBar">
                <h3> Search</h3>
                <form> 
                <label name="searchBar">Search </label>
                <input type="text" name="search" onChange={this.search}></input>
                <br/>
                <br/>
                <input type="checkbox"></input> <p>Only show products on stock</p>

                </form>
            </div>
        )
    }
}

export default SearchBar
