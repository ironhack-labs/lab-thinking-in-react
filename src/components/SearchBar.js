import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }


    handleInputChange = (e) => {
        this.setState({
            text: e.currentTarget.value
        }, () => { //async callback
            this.props.filter(this.state.text)
        })

    }


    render() {
        return (
            <input type="text" onChange={(e) => this.handleInputChange(e)} />
        )
    }
}


export default SearchBar