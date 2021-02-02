import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            searchVal: ''
        }
    }

    handleChange = (e) =>{
        const searchVal = e.target.value
        this.setState({
            searchVal
        })

        this.props.updateSearch(searchVal)
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.searchVal} placeholder="Search for Item" onChange={this.handleChange}/>
            </div>
        )
    }
}
