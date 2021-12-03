import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super()

        this.state = {
            updateSearchText: props.updateSearchText,
            search: "",
        }
    }

    handleChange = (e) => {
        let { name, value } = e.currentTarget
    
        this.setState({
            [name]: value,
        })
    
        this.state.updateSearchText(value)
      }



    render() {
        return(
            <>
            <input onChange={this.handleChange} value={this.state.search} type="text" name="search"></input>
            </>
        )
    }
}

export default SearchBar