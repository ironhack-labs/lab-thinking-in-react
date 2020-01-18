import React, { Component } from 'react'

export default class CheckboxFilter extends Component {

    filter = (event) => {
        this.props.filter(event)
    }

    render() {
        return (
            <div>
                <input onClick={this.filter} type="checkbox"></input>
                <label>Only show products on stock</label>
            </div>
        )
    }
}
