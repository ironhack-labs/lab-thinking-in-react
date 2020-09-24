import React, { Component } from 'react'
import ProductTable from './ProductTable/ProductTable'

export default class SearchBar extends Component {
    changeHandler = (event) => {
        this.props.setQuery(event.target.value)
    }
    tickHandler = (event) => {
        //  this.props.setTickQuery()
        console.log("tick event", event.target.value)
        // this.props.setTickQuery(event.target.value)
        this.props.tickQuery ? this.props.setTickQuery(false) : this.props.setTickQuery(true)
        // this.props.setTickQuery()
    }
    render() {
        return (
            <div>
                Search
                <input
                    type="text"
                    value={this.props.query}
                    onChange={this.changeHandler}
                ></input>
                <br>
                </br>
                <input
                    type="checkbox"
                    //  value={this.props.TickQuery}
                    onClick={this.tickHandler}
                // onClick={this.props.setTickQuery}
                ></input>
                   Only show products on stock
            </div >
        )
    }
}
