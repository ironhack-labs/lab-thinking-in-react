import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            searchString : ''
        }
    }

    handleChange(e) {
        
        let { type, value } = e.target;
        let onlyStocked = value === 'on' ? true : false;

        if (type !== 'checkbox') {
            this.setState({
                searchString: value
            })  
        }
        
        this.props.filterProducts(this.state.searchString, onlyStocked)
    }


    render() {
        return (
            <div>
                <h2>Search</h2>
                <input type='text' onChange={e => this.handleChange(e)}/>
                <br/>
                <br/>
                <input type='checkbox' onChange={e => this.handleChange(e)}/>
                <label>Only show products on stock</label>
                <br/>
                <br/>
            </div>
        )
    }
}
