import React, { Component } from "react";
import './App.css';


class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            isGoing : false
        }
    }

    handleInputChange = (event) => {
        console.log(event)
        this.props.Checked(event)
        this.setState ({
            isGoing : !this.state.isGoing
        })

    }

    SearchLive = (e) => {
        this.props.Searching(e.target.value)
    }
    render() {
        return(
            <div>
                <label></label>
                <input placeholder="Choose your product" onChange={ (e) => this.SearchLive(e)}></input> 
                <input type="checkbox" value="Only show product in stock" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}></input>
            </div>
        )
    }
}

export default SearchBar;