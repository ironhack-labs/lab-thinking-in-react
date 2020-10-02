import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        const inputStyle = {
            width: '50%',
            height: '30px',
            marginBottom: '30px'
        }
        const divStyle = {
            marginBottom: '30px'
        }
        return (
            <div style={divStyle} >
                Search<br />
                <input style={inputStyle} type="text"></input><br />
                <input type="checkbox" /><label> Only show in-stock products</label>
            </div>
        )
    }
}
