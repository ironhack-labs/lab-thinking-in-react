import React, { Component } from 'react'

export default class CheckBox extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.props.handleChecked}/>
                <span>Only show product in stock</span>
            </div>
        )
    }
}
