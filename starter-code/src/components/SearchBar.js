import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            products: this.props
        }
    }

    



    render() {

        return (
            <React.Fragment>
                <h3>Search</h3>
                <input type="text" placeholder="Search..." onChange={(e) => this.props.searchProduct(e)} />
                <input type="checkbox" onChange={()=> this.props.checkOut()}/><span>Only show products on stock</span>

            </React.Fragment>
        )
    }
}
