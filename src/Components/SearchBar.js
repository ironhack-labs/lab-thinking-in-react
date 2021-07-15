import { Component } from "react"
import React from "react"
import data from '../data.json'

class SearchBar extends Component {

    constructor() {
        super()
        this.state = {
            data

        }
    }



    render() {



        return (
            <>
                <h3>Search</h3>
                <br></br>
                <input type='text'></input>
                <br></br>
                <p><input type='checkbox' />Only show products on stock</p>
            </>
        )
    }
}

export default SearchBar