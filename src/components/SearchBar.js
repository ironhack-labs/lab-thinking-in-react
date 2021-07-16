import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange = event => {
        // we want to trigger an update of the state of query in App.js
        this.props.setQuery(event.target.value);
    }

    render() {
        return (
            <>
            
            <div>
            <input style={{width: '80vw', height: '1.3rem', borderRadius: '3px', borderColor: 'lightgrey'}}
                type="text"
                value={this.props.query}
                onChange={this.handleChange}
            />
             </div>
            </>
        )
    }
}