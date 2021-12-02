import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
        }
    }

    handleChange = (e) => {
        let { name, value } = e.currentTarget

        this.props.filterSearch(value)

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>

                <label>
                    Search: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                </label>  <br />
            </form>
        )
    }
}
