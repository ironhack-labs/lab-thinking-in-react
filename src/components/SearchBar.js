import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <h2>Search</h2>
                <div className="search">
                    <div>
                        <input className="searchbar" type="text" onChange={this.props.findTheProduct}></input>
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="inStock"></input>
                        <label>Only show products on stock</label>
                    </div>
                </div>
            </div>
        )
    }
}
