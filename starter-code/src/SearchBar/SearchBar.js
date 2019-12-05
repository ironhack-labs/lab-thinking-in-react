import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
               <input type="text" onChange={(e) => this.props.search(e)} value={this.props.searchInput}></input>
               <label><input onClick={(e) => this.props.onlyStock(e)} type="checkbox" defaultChecked={this.props.checkState}/>Only show products on stock></label> 
            </div>
        )
    }
}
