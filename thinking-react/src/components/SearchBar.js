import React, { Component } from 'react';
import data from '../data.json'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={}

    }
    render() {
        console.log(this.props)
        let {name} = this.state;
        return(
            <fieldset>
                <input type="text" value={name} onChange={(e) => this.props.onSearch(this.props.list, e.target.value)} />
            </fieldset>
        )
    }
}

export default SearchBar;