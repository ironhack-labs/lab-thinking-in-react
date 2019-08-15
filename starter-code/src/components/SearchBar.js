import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }
    handleOnChange = e => {
        this.props.search(e.target.value)
    }


    render() {
        return (
            <input className='searchBar' onChange={this.handleOnChange} type="text" />
        )


    }

}

export default SearchBar