import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    inputSearch = e => {
        const { value } = e.target
        this.setState({search: value}, () => this.props.searchFor(e.target.value))
        
        
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.state.search} onChange={this.inputSearch} />
            </form>
        )
    }
}

export default SearchBar
