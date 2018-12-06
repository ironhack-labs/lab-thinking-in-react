import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <input className="input" onChange={e => this.props.search(e)} type="text" placeholder="Search"></input>
                <br></br>
                <input type="checkbox" id="checkStock"></input><label>Only show products in stock</label>
            </div>
        )
    }
}
