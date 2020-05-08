import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super()
        this.state = {
            searchBarInput: ''
        }
        this.handleOnChange = e =>{
            this.setState({
                searchBarInput: e.target.value
            })
            this.props.searchProduct(e.target.value)
        }
    }
    render(){
        return(
            <div>
                <label>Search</label>
                <input type="text" value={this.state.searchBarInput} className="searchBar" onChange={this.handleOnChange}/>
            </div>
        )
    }
}