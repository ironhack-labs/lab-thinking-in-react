import React, { Component } from 'react'

export default class CheckBox extends Component {
    constructor(props) {
        super(props)
    }
    
    handleInputChange = (event) => {
        this.props.setIsStock(event.target.checked)
    }
    render() {
        return (
            <div>
                <form onSubmit = {e => e.preventDefault()}>
                <input
                name="isStock"
                type="checkbox"
                checked={this.props.check}
                onChange={this.handleInputChange} />
                </form>
            </div>
        )
    }
}
