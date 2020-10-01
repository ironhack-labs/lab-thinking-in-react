import React, { Component } from 'react'

class SearchBar extends Component {

     constructor() {
        super()
        this.state = {
            name : ''
        }
    }

    handleNameInput = e => {
        this.setState({ name: e.target.value })
        console.log(this.state.name, typeof(this.state.name))
        this.props.updateFilter(this.state.name)
    }

    render() {
        return (
            
            <input type="text" name="name" value={this.state.name} onChange={this.handleNameInput} />


        )
    }
}

export default SearchBar