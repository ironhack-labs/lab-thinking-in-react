import React, { Component } from 'react'

class SearchForm extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.searchItem(this.state)
        this.setState({
            name: ''
        })
        console.log(this.state)
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })

    }

    render() {

        return (
            <>
                <form onSubmit={this.handleFormSubmit}>

                    <label>
                        Search
                        <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                    </label> <br></br>
                </form>
            </>
        )
    }
}

export default SearchForm