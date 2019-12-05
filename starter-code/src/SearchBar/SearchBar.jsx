import React, { Component } from 'react'

export default class
    extends Component {
    render() {
        return (
            <div>
                <h3>Search</h3>
                <input onChange={this.props.search} type="text"></input>
                <div className="checkBox">
                    <input type="checkbox"></input>
                    <h4>Only show products on stock</h4>
                </div>


            </div>
        )
    }
}
