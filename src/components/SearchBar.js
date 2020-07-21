
import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.search = this.search.bind(this)
    }
    search(e){
        console.log(e.target.value)
        this.props.callbackFunction(e.target.value)
    }
    render() {
        return (
            <form>            
            <label>SearchBar</label>
          <input
            type="text"
            name="search-bar"
            onChange={this.search}
          />
        </form>
        )
    }
}
