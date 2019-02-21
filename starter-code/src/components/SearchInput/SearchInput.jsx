import React from 'react';
import './SearchInput.css';

export default class SearchInput extends React.Component {
    state = {
        text: "",
        checked: false
    }
    handler = (e) => {
        let newState = {
            ...this.state
        }
        if (e.target.type === "checkbox") newState.checked = !this.state.checked
        if (e.target.type === "text") newState.text = e.target.value
        this.setState(newState)
        this.props.function(newState)
    }
    render() {
        return (
            <div className="searchBox">
                <label htmlFor={this.props.children}>{this.props.children}</label>
                <input className="form-control" type="text" name={this.props.children} value={this.state.value} onChange={this.handler} />
                <span><input type="checkbox" checked={this.state.checked} onChange={this.handler} /> Only show products on stock</span>
            </div>
        )
    }
}