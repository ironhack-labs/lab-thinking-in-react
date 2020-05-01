import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.filterHandle = this.filterHandle.bind(this)
        this.stockHandle = this.stockHandle.bind(this)
    }

    filterHandle(e) {
        this.props.filter(e.target.value)
    }

    stockHandle(e) {
        this.props.instock(e.target.value)
    }
    
    render() {
        return (
            <div className='component search'>
                <p>Search</p>
                <input className="searchbar" type="text" placeholder="search bar" onChange={this.filterHandle}></input>
                <br/>
                <div className='checkbox'>
                <input type="checkbox" onChange={this.stockHandle}></input>
                <p>Only show products in stock</p>
                </div>
            </div>
        )
    }
}
