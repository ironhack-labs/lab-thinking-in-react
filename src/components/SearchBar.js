import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        console.log("this.props in SearchBar:", this.props.products.data)

        return (
            <div className="search">
                <h3>Search</h3>
                <form>
                    <input type="text" />
                    
                </form>
            </div>
        )
    }
}
