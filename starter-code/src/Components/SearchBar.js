import React, { Component } from 'react'

export default class SearchBar extends Component{

    render(){
        
        return(
            <div>
                <h2>Search</h2>
                <form>
                    <input type="text" placeholder="Search..." />
                    <p><input type="checkbox" />Only show products in stock</p>
                </form>
            </div>
        )
    }
}