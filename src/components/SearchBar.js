import {Component} from 'react'
import React from 'react';


class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
}

handleInputChange (e) {


    const name = e.target.name
    const value = e.target.value
        // Computed property names
    this.setState({ [name]: value })

    this.handleSubmitForm()
}

handleSubmitForm() {
    const searchItem = this.state
    this.props.search(searchItem)
}

render () {
    return(
        <form onSubmit={e => this.handleSubmitForm(e)}>
            <label>
                <input type="text" name="search" value={this.state.search} onChange={e => this.handleInputChange(e)} />
            </label>
        </form>
    )
}

}

export default SearchBar