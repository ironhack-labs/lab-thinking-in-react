import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }

    handleInputChange = e => {
        this.props.filterProduct(e.target.value)
        this.setState({ [e.target.name]: e.target.value })

    }


    render() {
        return (
            <>
                <form>
                    <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange}></input>
                </form>
            </>
        )
    }
}

export default SearchBar