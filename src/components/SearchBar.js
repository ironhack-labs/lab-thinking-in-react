import './SearchBar.css'
import { Component} from 'react'
import React from 'react';


class SearchBar extends Component {

    constructor () {

        super()
        this.state = {
            keyword: ''
        }
    }

    sendKeyWord(word) {
        console.log(this.props)
        this.props.search(word)
    }

    handleInputChange(e) {

        const value = e.target.value

        this.setState({
            keyword: value
        })
        this.sendKeyWord(value)
    }

    render() {

        return(
            <input type='text' value={this.state.keyword} onChange={e => this.handleInputChange(e)}/>
        )
    }

}

export default SearchBar