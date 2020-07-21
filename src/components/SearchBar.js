import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    search = e => {
        this.props.callback(e.target.value)
    }

    render() {
        return (
            <form>
                <input type="text" name="search" placeholder="Search..." onChange={this.search}/>
            </form> 
        )
    }
}
