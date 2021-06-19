import {Input} from 'reactstrap';
import React, { Component } from 'react'

class SearchBar extends React.Component {
    constructor(props){
        super(props);
    }

    onFieldChange(event) {
        // for a regular input field, read field name and value from the event
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }

    render () {
        return(
            <div className="searchBar">
                <div className="form">
                    <Input onChange={this.onFieldChange.bind(this)} type="text" name="search" placeholder="Search..."/>
                </div>
            </div>
        )
    }
}

export default SearchBar;