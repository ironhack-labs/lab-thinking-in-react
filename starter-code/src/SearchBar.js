import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <h3>Search</h3>
                <input
                className= "search-bar"
                type="text"
                placeholder = "filter products"
                onChange ={(e)=> this.props.filterProducts(e)}
                value={this.props.filterQuery}/>

                <div className="check-box">
                <input type="checkbox" 
                
                onChange = {(e)=>this.props.checkStock(e)}/> 
                <label>Only show products on stock</label>
                </div>
            </div>
        )
    }
}
